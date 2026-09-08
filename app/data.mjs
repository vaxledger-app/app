export const API='https://api.finchnode.com/demo/v1';
export const categories=['demographics','medications','conditions','labs','vitals','allergies','immunizations','encounters'];
export function validateRecord(d){if(d?.synthetic!==true||!d.record||d.patientId!=='patient-demo-001')throw new Error('Expected the fixed fictional FinchNode record.');for(const c of categories)if(!Array.isArray(d.record[c]))throw new Error('Unexpected record format.');return d;}
export async function request(path,options={}){const response=await fetch(API+path,{...options,credentials:'omit',signal:options.signal?AbortSignal.any([options.signal,AbortSignal.timeout(15000)]):AbortSignal.timeout(15000)});if(!response.ok)throw new Error(response.status===429?'Demo API request limit reached. Please wait a minute before retrying.':`The demo API could not respond (${response.status}). Please retry.`);return response.json();}
export const label=r=>r?.medicationCodeableConcept?.text||r?.vaccineCode?.text||r?.code?.text||r?.code?.coding?.[0]?.display||r?.type?.[0]?.text||r?.name?.map(n=>[...(n.given||[]),n.family].join(' ')).join(', ')||r?.resourceType||'Unnamed record';
export const date=r=>r?.effectiveDateTime||r?.occurrenceDateTime||r?.period?.start||r?.authoredOn||r?.onsetDateTime||r?.recordedDate||r?.meta?.lastUpdated||'';
export const formatDate=s=>s&&!Number.isNaN(Date.parse(s))?new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(s)):'Date not supplied';
export const status=r=>typeof r?.status==='string'?r.status:r?.clinicalStatus?.coding?.[0]?.code||'Not supplied';
export const quantity=r=>r?.valueQuantity?`${r.valueQuantity.value} ${r.valueQuantity.unit||''}`:r?.component?.map(c=>`${c.valueQuantity?.value??'—'} ${c.valueQuantity?.unit||''}`).join(' / ')||'No numeric result';
export const flatten=record=>Object.entries(record).flatMap(([category,rows])=>rows.map(r=>({...r,category}))); 
export function download(name,content,type='text/plain'){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
