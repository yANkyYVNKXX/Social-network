import style from './Messages.module.css'

export default function messages(props) {
  return (
   <div>{props.messages.text}</div>
  );
}

