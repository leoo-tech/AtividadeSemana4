import './Button.css'
function Button() {
  function handleClick() {
    alert('Bem vindo(a)! Aqui você irá acessar seu processo de adoção.');
  }

  return (
    <button className="button" onClick={handleClick}>
      Entrar
    </button>
  );
}

export default Button;