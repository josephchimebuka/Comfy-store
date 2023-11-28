import { useNavigation } from "react-router-dom"
interface submitBtn{
    text: string
    isSubmitting: boolean | string;
}
const SubmitButton:React.FC<submitBtn> = ({text}) => {
const navigation = useNavigation()
const isSubmitting = navigation.state = 'submitting'
const isSubmittingBool = typeof isSubmitting === 'boolean' ? isSubmitting : false;
  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmittingBool}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}

export default SubmitButton