import React, { useState } from 'react'

import checkValidity from './checkValidity'

import convert from './convert'

function ColorInput() {
  const [form, setForm] = useState({
    color: '#aaaaaa',
    rgb: 'rgb(255, 255, 255)',
    error: false
  });


  const handleChange = (evt) => {
    const value = evt.target.value.split('');

    if (value.length === 7) {
      let check = checkValidity(value);
      if (check) {
        setForm(prevForm => ({ ...prevForm, error: check }));
      }
      else {
        setForm(prevForm => ({ ...prevForm, color: evt.target.value }));
        let rgb = convert(value);
        setForm(prevForm => ({ ...prevForm, rgb: rgb }));
      }
    }
    else setForm(prevForm => ({ ...prevForm, error: false }))
  }
  return (
    <form className='color-converter' style={{ backgroundColor: form.rgb }} >
      <div className='rgb'> {form.rgb} </div>
      <input id='color' onChange={handleChange}></input>
      { form.error && <div className='error'> Ошибка! </div>}
    </ form >
  )
}

export default ColorInput
