import styles from './button.module.css'
/** 
 * type: filled | outlined
 * text
 * href
 */



function Button(props) {
    let type = props.type;

  return (
    <a href={props.href} >
      <button className={`button ${styles["button"]} ${styles[type]}`}>
        
        {props.text}
           
      </button>
      </a>
    
  )
}

export {Button}