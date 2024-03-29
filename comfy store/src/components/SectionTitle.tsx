import React from 'react'


interface sectionTitle{
    text: string;
}
const SectionTitle: React.FC<sectionTitle> = ({text}) => {
  return (
    <div className='border-b border-base-300 py-5'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  )
}

export default SectionTitle