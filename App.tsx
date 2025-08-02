
import React from 'react';

// --- Icon Components ---

const SunIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
);

const WaterIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M2.25 12l8.954 8.955c.44.439 1.152.439 1.591 0L21.75 12M12 21l-8.955-8.954 8.955-8.955L21 21.75 12 21Z" />
    </svg>
);

const WarningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
);

const ContaminationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);


// --- Reusable UI Components ---

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, children, className }) => (
    <div className={`bg-gray-800 border border-gray-700 rounded-xl p-8 transition-transform duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_10px_15px_-3px_rgba(220,38,38,0.1),_0_4px_6px_-2px_rgba(220,38,38,0.05)] ${className}`}>
        {icon && <div className="w-12 h-12 mb-4 text-red-600">{icon}</div>}
        <h3 className="text-2xl font-bold mb-4 text-red-500">{title}</h3>
        {children}
    </div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <h2 className={`font-black text-4xl md:text-5xl text-center mb-12 ${className}`}>
        {children}
    </h2>
);


// --- Page Section Components ---

const Header: React.FC = () => (
    <header className="bg-gray-900">
        <div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white">Genocídio Climático no Vale do Jequitinhonha</h1>
                <h2 className="mt-4 text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto">O relatório final do CLÍMAX 2025 e a Carta Climática do Jequitinhonha fundamentam a denúncia de crime de lesa-humanidade perante os Tribunais Internacionais.</h2>
                
                <blockquote className="mt-10 max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl italic text-white">"Quando chegar a hora de contar os corpos, por favor, não digam que foi por causas naturais. Nada do que está em curso é natural, nem poderá ser naturalizado jamais."</p>
                    <footer className="mt-2 text-md text-gray-400">— Trecho do Relatório Final CLÍMAX 2025</footer>
                </blockquote>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="https://drive.google.com/file/d/1MFqLd_LK5BV1Hk8bwzC9BACZHz5seLFh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors duration-300">
                        Baixar Relatório Final
                    </a>
                    <a href="https://convite.yekit.org" target="_blank" rel="noopener noreferrer" className="inline-block bg-transparent border-2 border-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-600 transition-colors duration-300">
                        Aderir à Coalizão
                    </a>
                </div>
            </div>
        </div>
    </header>
);

const DenunciaSection: React.FC = () => (
    <section id="denuncia" className="max-w-6xl mx-auto mb-24">
        <SectionTitle className="text-red-500">A Tipificação do Crime</SectionTitle>
        <div className="bg-gray-800 border-l-4 border-red-500 p-6 rounded-r-lg mb-12 max-w-3xl mx-auto text-center">
            <p className="text-lg italic text-gray-300">"Entende-se por genocídio [...] sujeitar deliberadamente o grupo a condições de existência capazes de ocasionar sua destruição física total ou parcial.”</p>
            <p className="mt-2 font-bold text-gray-400">(Artigo 6º, alínea “c” do Estatuto de Roma)</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card icon={<SunIcon />} title="Agravamento Climático" className="p-6">
                <p className="text-gray-300">Financiar atividade extrativista no epicentro da emergência climática do Brasil (44,8°C), acelerando a desertificação.</p>
            </Card>
            <Card icon={<WaterIcon />} title="Apartheid Hídrico" className="p-6">
                <p className="text-gray-300">Outorga de 3,6 milhões de litros de água/dia para a mineradora enquanto famílias sobrevivem com menos de 20 litros.</p>
            </Card>
            <Card icon={<WarningIcon />} title="Colapso Sanitário" className="p-6">
                <p className="text-gray-300">Aumento de 30% na demanda do hospital de Araçuaí e surto de doenças respiratórias, dermatológicas e gastrointestinais.</p>
            </Card>
            <Card icon={<ContaminationIcon />} title="Contaminação e Risco" className="p-6">
                <p className="text-gray-300">Comunidades expostas a poeira tóxica, água contaminada e danos estruturais em casas devido a detonações da mina.</p>
            </Card>
        </div>
    </section>
);

const ResponsabilizacaoSection: React.FC = () => (
    <section id="responsabilizacao" className="max-w-6xl mx-auto mb-24">
        <SectionTitle>O Dolo do Estado: Provas da Ação Deliberada</SectionTitle>
        <div className="space-y-8">
            <div className="p-6 bg-gray-800 rounded-lg flex items-start gap-6">
                <span className="text-red-500 font-black text-4xl">1</span>
                <div>
                    <h3 className="text-2xl font-bold text-white">Financiamento Criminoso</h3>
                    <p className="mt-2 text-gray-300">Repasse de <span className="font-bold text-red-400">R$ 486,7 milhões do Fundo Clima</span> pelo BNDES, usando verba de combate à crise climática para acelerá-la.</p>
                </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-start gap-6">
                <span className="text-red-500 font-black text-4xl">2</span>
                <div>
                    <h3 className="text-2xl font-bold text-white">Captura Regulatória</h3>
                    <p className="mt-2 text-gray-300">Confissão da ANA e ANM sobre a <span className="font-bold text-red-400">ausência de fiscalização</span> da captação de água e das operações da mineradora.</p>
                </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-start gap-6">
                <span className="text-red-500 font-black text-4xl">3</span>
                <div>
                    <h3 className="text-2xl font-bold text-white">Pareceres Técnicos Ignorados</h3>
                    <p className="mt-2 text-gray-300">Manutenção da licença mesmo após parecer da ANM classificar o plano da empresa como <span className="font-bold text-red-400">"insatisfatório"</span>.</p>
                </div>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg flex items-start gap-6">
                <span className="text-red-500 font-black text-4xl">4</span>
                <div>
                    <h3 className="text-2xl font-bold text-white">Violação da Consulta Prévia</h3>
                    <p className="mt-2 text-gray-300">Anulação sistemática do direito das comunidades (Convenção 169/OIT) de decidirem sobre seus territórios, demonstrando <span className="font-bold text-red-400">intenção de anular sua capacidade política</span>.</p>
                </div>
            </div>
        </div>
    </section>
);

const RacismoAmbientalSection: React.FC = () => (
    <section id="racismo-ambiental" className="max-w-4xl mx-auto mb-24 text-center">
        <SectionTitle>As Vítimas do Projeto: Racismo Ambiental</SectionTitle>
        <div className="text-lg text-gray-300 space-y-6">
            <p><strong className="text-red-400">QUEM SÃO:</strong> Cerca de 235.000 pessoas, incluindo comunidades quilombolas, indígenas (Pankararu, Pataxó, Aranã), geraizeiras, camponesas e ribeirinhas.</p>
            <p><strong className="text-red-400">O ALVO:</strong> Populações majoritariamente negras e pobres do semiárido, cujos modos de vida tradicionais são destruídos pela "necromineração".</p>
            <p><strong className="text-red-400">A PROVA DO RACISMO:</strong> A seletividade do sacrifício. A destruição é direcionada a um grupo específico, enquanto os lucros são canalizados para o capital transnacional.</p>
        </div>
    </section>
);

const AcoesSection: React.FC = () => (
    <section id="acoes" className="max-w-6xl mx-auto mb-24">
        <SectionTitle>Nossas Ações e Demandas Urgentes</SectionTitle>
        <div className="grid lg:grid-cols-3 gap-8">
            <Card title="Medida Cautelar na CIDH">
                <ul className="space-y-3 list-disc list-inside text-gray-300">
                    <li>Suspensão imediata das operações.</li>
                    <li>Bloqueio dos recursos do Fundo Clima.</li>
                    <li>Proteção para defensores de direitos humanos.</li>
                    <li>Perícia independente na região.</li>
                </ul>
            </Card>
            <Card title="Ação no STF">
                <p className="text-gray-300">Proposição de Ação Direta de Inconstitucionalidade (ADI) para enfrentar a flexibilização normativa da política de “minerais críticos” que favorece a exploração predatória.</p>
            </Card>
            <Card title="Litigância Climática">
                <p className="text-gray-300">Preparação de ações em tribunais internacionais para responsabilizar e punir os diretores de BNDES, Comitê Gestor do Fundo Clima e agências reguladoras.</p>
            </Card>
        </div>
    </section>
);

const CartaClimaticaSection: React.FC = () => (
    <section id="carta-climatica" className="max-w-4xl mx-auto text-center">
        <SectionTitle>Nossa Visão de Futuro: A Carta Climática do Jequitinhonha</SectionTitle>
        <div className="text-lg text-gray-300 space-y-6">
            <p>Rejeição da falsa narrativa de que a mineração de lítio é "verde" ou essencial para a "transição energética".</p>
            <p>Introdução do conceito de <strong className="text-red-400">"necromineração"</strong>: uma atividade econômica que promove morte e injustiça em nome do lucro.</p>
            <p>Defesa da água, da vida e dos territórios como pilares de uma verdadeira justiça climática.</p>
            <p>Formalização de uma coalizão para uma resposta integrada (jurídica, científica e social) ao avanço do "Vale do Lítio".</p>
        </div>
    </section>
);

const SiteFooter: React.FC = () => (
    <footer className="bg-gray-950 text-center p-10 mt-20">
        <div className="max-w-4xl mx-auto">
            <blockquote className="mb-8">
                <p className="text-xl md:text-2xl italic text-white">"A Terra é generosa e justa - ela cobrará dos genocidas o preço de nossas vidas."</p>
            </blockquote>
            <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <a href="https://drive.google.com/file/d/1MFqLd_LK5BV1Hk8bwzC9BACZHz5seLFh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">Baixar Relatório Final</a>
                 <span className="text-gray-600 hidden sm:inline">|</span>
                 <a href="https://convite.yekit.org" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">Aderir à Coalizão</a>
            </div>
            <p className="text-gray-500">CLÍMAX 2025 | Pela água, pela vida e pelos territórios.</p>
            <p className="text-gray-600 mt-2 text-sm">Contato para imprensa e apoiadores: <a href="mailto:contato@climax.yekit.org" className="underline hover:text-red-400 transition-colors">contato@climax.yekit.org</a></p>
        </div>
    </footer>
);


// --- Main App Component ---

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-20 px-6">
        <DenunciaSection />
        <ResponsabilizacaoSection />
        <RacismoAmbientalSection />
        <AcoesSection />
        <CartaClimaticaSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default App;
