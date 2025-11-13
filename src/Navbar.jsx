import { Link } from 'react-router-dom';

function Navbar() {
    return(
    <nav className="bg-[#f2f2f2] text-[#00008B] border-b-[1px] border-b-[#d2d2d2] flex justify-between items-center gap-8 py-3 px-6 font-bold text-[22px]">
            <Link to="/" className="text-[2rem]">Início</Link>
            <ul className="m-0 p-0 list-none flex gap-4 items-center">
                <li>
                    <Link to="/info" className="text-[24px] flex no-underline h-full text-inherit items-center p-1 hover:bg-[#d2d2d2]">Informações</Link>
                </li>
                <li>
                    <Link to="/register" className="text-[24px] flex no-underline h-full text-inherit items-center p-1 hover:bg-[#d2d2d2]">Cadastrar Golpe</Link>
                </li>
                <li>
                    <Link to="/empresas" className="text-[24px] flex no-underline h-full text-inherit items-center p-1 hover:bg-[#d2d2d2]">Empresas mais Usadas</Link>
                </li>
                <li>
                    <Link to="/rempresas" className="rounded-md bg-[#0b3d91] px-4 py-1 text-white font-semibold text-[24px] hover:bg-[#0e56bd] transition-colors flex items-center no-underline">Login Empresa</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar