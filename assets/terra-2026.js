(() => {
  const menu = document.querySelector('.tc-menu');
  const panel = document.getElementById('mob');
  const closeMenu = () => { if (!menu || !panel) return; panel.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menú'); };
  if (menu && panel) {
    menu.addEventListener('click', () => { const open = panel.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeMenu(); menu.focus(); } });
    window.matchMedia('(min-width:761px)').addEventListener('change', e => { if(e.matches) closeMenu(); });
  }
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.tc-links a').forEach(a => { if(a.getAttribute('href') === page) a.setAttribute('aria-current','page'); });
  const form = document.getElementById('contactForm');
  if (!form) return;
  const interest = form.elements.interes;
  const owner = document.getElementById('ownerFields');
  const buying = document.getElementById('compraFields');
  const hint = document.getElementById('modalidadHint');
  const status = document.getElementById('formStatus');
  const requested = new URLSearchParams(location.search).get('interes');
  const selected = requested === 'quintas' ? 'casas' : requested;
  if ([...interest.options].some(o => o.value === selected)) interest.value = selected;
  function updateFields() {
    const isOwner = interest.value === 'vender';
    owner.hidden = !isOwner; buying.hidden = isOwner;
    owner.querySelectorAll('input,select').forEach(el => { el.disabled = !isOwner; });
    form.elements.colonia.required = isOwner;
    form.elements.forma.disabled = isOwner;
    hint.textContent = interest.value === 'islas' ? 'Islas Agrarias: de contado o con crédito Infonavit, sujeto a validación.' : interest.value === 'san-patricio' ? 'San Patricio: de contado o con financiamiento directo.' : 'Le orientamos según la propiedad que elija.';
    const incompatible = interest.value === 'islas' ? 'directo' : interest.value === 'san-patricio' ? 'infonavit' : '';
    [...form.elements.forma.options].forEach(opt => { opt.disabled = opt.value === incompatible; });
    if (form.elements.forma.value === incompatible) form.elements.forma.value = 'orientacion';
    form.querySelector('[type=submit]').textContent = isOwner ? 'Solicitar contacto para vender →' : 'Solicitar información →';
  }
  updateFields(); interest.addEventListener('change', updateFields);
  form.addEventListener('submit', async e => {
    e.preventDefault(); if(!form.reportValidity()) return;
    const btn = form.querySelector('[type=submit]'); if(btn.disabled) return;
    const label = btn.textContent; btn.disabled = true; btn.textContent = 'Enviando…';
    status.dataset.state = 'pending'; status.textContent = 'Estamos enviando su consulta.';
    const fd = new FormData(form);
    const data = {_subject: 'Consulta del sitio web — Terra Cali', _template:'table', _captcha:'false', Nombre:fd.get('nombre'), Telefono:fd.get('telefono'), Correo:fd.get('correo') || '', Interes:interest.options[interest.selectedIndex].text, Mensaje:fd.get('mensaje') || ''};
    if (interest.value === 'vender') { data.Colonia=fd.get('colonia'); data.PrecioConsiderado=fd.get('precio') || ''; data.CreditoVigente=fd.get('credito'); }
    else { data.FormaDeCompra=form.elements.forma.options[form.elements.forma.selectedIndex].text; }
    const controller = new AbortController(); const timer=setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('https://formsubmit.co/ajax/info@terracali.com.mx', {method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data),signal:controller.signal});
      if(!response.ok) throw new Error('http'); const result=await response.json();
      if(result.success !== true && result.success !== 'true') throw new Error('rejected');
      status.dataset.state='success'; status.textContent='Su consulta se envió correctamente. El equipo de Terra Cali le contactará por el medio indicado.';
      if(typeof window.fbq === 'function') window.fbq('track','Lead');
      form.reset(); updateFields();
    } catch(err) {
      status.dataset.state='error'; status.replaceChildren(document.createTextNode('No pudimos confirmar el envío. Sus datos siguen en el formulario. Puede intentarlo de nuevo o '));
      const link=document.createElement('a');link.href='https://wa.me/526646120031';link.textContent='escribirnos por WhatsApp';status.append(link,document.createTextNode('.'));
    } finally { clearTimeout(timer); btn.disabled=false; if(status.dataset.state !== 'success') btn.textContent=label; }
  });
})();
