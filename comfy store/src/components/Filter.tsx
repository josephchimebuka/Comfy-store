
import { Form, Link, useLoaderData } from 'react-router-dom'
import { FormInput } from '.'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'


type MetaData={
    categories: string[],
    companies: string[],
    pagination: {
      page: number,
      pageCount: number,
      pageSize: number,
      total: number
    }
}


const Filter = () => {
  const {meta,params} = useLoaderData() as {meta: MetaData}
  //These params were supposed to make me add default values to each component
  const options = ['a-z', 'z-a', 'high', 'low']
  return (
  <Form className='mt-12 bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput 
        label={'Search Category'}
        name={'search'}
        type={'search'}
        size={''} defaultValue={''}/>
        <FormSelect 
        label={'Select Category'}
        lists={meta.categories}
        name={'category'} size={'input-sm'}          />
           <FormSelect 
        label={'Select Company'}
        lists={meta.companies}
        name={'company'} size={'input-sm'}          />
           <FormSelect 
        label={'Sort by'}
        lists={options}
        name={'sort'} size={'input-sm'}          />
        <FormRange name={'Range'} label={'Range'} size={'range-sm'}/>
        <FormCheckBox name={'shipping'} label={'Free shipping'} size={'checkbox-sm'}/>
           <button type='submit' className='btn btn-primary btn-sm  uppercase'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm uppercase'>
        reset
      </Link>
      </Form>
  )
}

export default Filter