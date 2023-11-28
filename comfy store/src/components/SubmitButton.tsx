import React from 'react';
import { useNavigation } from 'react-router-dom';

interface SubmitBtnProps {
  text?: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
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
  );
};

export default SubmitBtn;
