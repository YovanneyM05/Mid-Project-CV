import React from 'react'
import CV from '../../assets/Jurnal Kelompok Data Mining.docx';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={ CV } download className='btn'>CV</a>
        <a href='#contact' className='btn btn-primary'>TIDAK PERLU DIBUKA</a>
    </div>
  )
}

export default CTA