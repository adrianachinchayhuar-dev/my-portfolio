"use client";
import { useRef, useState, type FormEvent, type ChangeEvent } from 'react';
import Icon from './Icon';
type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const initial: Values = { name: '', email: '', subject: '', message: '' };
const fields = [
  { key: 'name', label: 'Nombre completo', placeholder: '¿Cómo te llamas?', autoComplete: 'name', max: 100 },
  { key: 'email', label: 'Correo electrónico', placeholder: 'nombre@correo.com', autoComplete: 'email', max: 254 },
  { key: 'subject', label: 'Asunto', placeholder: 'Cuéntame sobre tu idea', autoComplete: 'off', max: 150 },
  { key: 'message', label: 'Mensaje', placeholder: 'Comparte tu idea, proyecto o propuesta…', autoComplete: 'off', max: 2000 },
] as const;
function validate(key: keyof Values, value: string) {
  if (!value.trim()) return 'Este campo es obligatorio.';
  if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Escribe un correo válido, como nombre@correo.com.';
  return undefined;
}
export default function ContactForm({ recipient }: { recipient?: string }) {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setOpened(false);
    const nextErrors: Errors = {};
    for (const { key } of fields) { const error = validate(key, values[key]); if (error) nextErrors[key] = error; }
    setErrors(nextErrors);
    const first = fields.find(({ key }) => nextErrors[key]);
    if (first) { formRef.current?.querySelector<HTMLElement>(`[name="${first.key}"]`)?.focus(); return; }
    if (!recipient) return;
    const subject = values.subject.trim().replace(/[\r\n]/g, ' ');
    const body = `Nombre: ${values.name.trim()}\nCorreo de contacto: ${values.email.trim()}\n\n${values.message.trim()}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  return <section aria-labelledby="form-title" className="contact-form surface"><div className="form-heading"><span className="eyebrow">Escríbeme</span><h2 id="form-title">Escríbeme un mensaje</h2><p className="muted">Completa los campos para preparar un borrador en tu aplicación de correo.</p></div><form ref={formRef} onSubmit={handleSubmit} noValidate><p className="form-help">Todos los campos son obligatorios.</p><div className="form-grid">{fields.map(({ key, label, placeholder, autoComplete, max }) => {
    const error = errors[key];
    const props = { id: key, name: key, required: true, value: values[key], maxLength: max, placeholder, autoComplete, className: 'field', 'aria-invalid': Boolean(error), 'aria-describedby': [error ? `${key}-error` : '', key === 'message' ? 'message-hint' : ''].filter(Boolean).join(' ') || undefined,
      onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { const value = event.target.value; setValues(current => ({ ...current, [key]: value })); setOpened(false); if (errors[key]) setErrors(current => ({ ...current, [key]: validate(key, value) })); },
      onBlur: () => setErrors(current => ({ ...current, [key]: validate(key, values[key]) })),
    };
    return <div key={key} className={`form-field ${key === 'subject' || key === 'message' ? 'form-full' : ''}`}><label htmlFor={key}>{label}</label>{key === 'message' ? <textarea {...props} rows={5} style={{ resize: 'vertical' }} /> : <input {...props} type={key === 'email' ? 'email' : 'text'} />}{error && <p id={`${key}-error`} className="field-error">{error}</p>}{key === 'message' && <p id="message-hint" className="field-counter">{values.message.length} / 2000</p>}</div>;
  })}</div>{!recipient && <p id="delivery-note" className="form-note">El envío por correo no está disponible por el momento. Gracias por tu interés en conectar.</p>}<button type="submit" disabled={!recipient} aria-describedby={recipient ? 'mail-help' : 'delivery-note'} className="button button-primary form-submit">Enviar mensaje <Icon name="arrow" width="18" /></button><p id="mail-help" className="form-help">Se abrirá tu aplicación de correo con un borrador. Necesitas una aplicación configurada y confirmar el envío allí. Esta página no envía ni almacena mensajes.</p><div role="status" aria-live="polite" className="form-status">{opened && 'Se solicitó abrir tu aplicación de correo. El mensaje aún no se ha enviado. Si no se abre, utiliza el enlace de correo de esta página. Tus datos siguen en el formulario.'}</div></form></section>;
}
