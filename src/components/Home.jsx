import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-[url('https://cdn.borainvestir.b3.com.br/2023/12/27125512/1-Freepik-3.jpg')] bg-fixed bg-cover bg-top w-full h-[360px] flex items-center rounded-3xl shadow-lg">
                <div className="p-[50px]">
                    <div className="bg-white/85 backdrop-blur-sm rounded-md p-6 max-w-3xl">
                        <p className="text-left text-[#2e2e2e] text-[24px] font-semibold leading-relaxed">Bem-vindos ao site que permite que você denuncie golpes do tipo presente e veja quais as empresas mais denunciadas!</p>
                    </div>
                </div>
            </div>
            <section className="max-w-4xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="p-4 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#0b3d91] mb-3">Para pessoas</h3>
                        <p className="text-left text-[#2e2e2e] text-[20px] leading-relaxed">No nosso site você pode denunciar golpes do tipo presente para que possamos manter a população em alerta e prevenir que mais pessoas percam dinheiro.</p>
                        <Link to="/register" className="mt-6 inline-block bg-[#0b3d91] hover:bg-[#0e56bd] text-white px-6 py-2 rounded-md font-semibold text-center">Denunciar como pessoa</Link>
                    </div>

                    <div className="p-4 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#0b3d91] mb-3">Para empresas</h3>
                        <p className="text-left text-[#2e2e2e] text-[20px] leading-relaxed">Empresas podem se cadastrar no site; após aprovação pela nossa equipe, terão acesso a uma planilha detalhada com as denúncias relacionadas.</p>
                        <Link to="/rempresas" className="mt-6 inline-block bg-[#0b3d91] hover:bg-[#0e56bd] text-white px-6 py-2 rounded-md font-semibold text-center">Cadastrar empresa</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home