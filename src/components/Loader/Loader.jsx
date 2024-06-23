import { Audio } from 'react-loader-spinner';
import css from './Loader.module.css'
export default function Loader(){

    return(
        <div className={css.loader}>        
        <Audio
  height = "100"
  width = "100"
  color = "green"
  ariaLabel="audio-loading"
  wrapperStyle
  wrapperClass
/>
<p>Loading data, please wait...</p>
        </div>

    )
}
