import './BurguerButton.css'

const icons = document.querySelectorAll('.icon');
  icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      icon.classList.toggle("open")
    })
  })

export const Burguerbutton = () => {
  return (
      <div className='icon nav-icon-1'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  )
  }

  export default Burguerbutton