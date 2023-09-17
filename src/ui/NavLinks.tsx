function NavLinks() {
  function handleClickMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.target);
  }

  return (
    <div>
      <div onClick={handleClickMenu}>
        <img src="../icons/hamburger.svg" alt="" />
      </div>
    </div>
  );
}

export default NavLinks;
