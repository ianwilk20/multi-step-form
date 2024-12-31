import {Formik} from 'formik'

const Step1 = () => {
    <Formik>{({handleSubmit}) => (<form onSubmit={handleSubmit}></form>)}
        
    </Formik>
}

export default Step1