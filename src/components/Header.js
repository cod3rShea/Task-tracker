import Button from './Button'

const Header = ({ color, text }) => {
  return (
    <header className='header'>
      <h1>Track </h1>
        <Button
          color='green'
          text='Add'
        />
    </header>
  );
}

export default Header

