import { useEffect, useState } from 'react'
import './App.css'
import outlookIcon from './assets/icons/outlook-svgrepo-com.svg'
import csharp2Icon from './assets/icons/csharp2.svg'
import dotnet2Icon from './assets/icons/NET.svg'
import reactIcon from './assets/icons/react.svg'
import azureIcon from './assets/icons/azure2.svg'
import databaseIcon from './assets/icons/bancodados.svg'
import python2Icon from './assets/icons/python2.svg'
import ibmIcon from './assets/icons/ibm.svg'
import csharpIcon from './assets/icons/csharp.svg';
import dotnetIcon from './assets/icons/dotnet.svg';
import blazorIcon from './assets/icons/blazor.svg';
import pythonIcon from './assets/icons/python.svg';
import firebaseIcon from './assets/icons/firebase.svg';
import sqliteIcon from './assets/icons/sqlite.svg';
import javascriptIcon from './assets/icons/javascript.svg';
import typescriptIcon from './assets/icons/typescript.svg';
import bootstrapIcon from './assets/icons/bootstrap.svg';
import css3Icon from './assets/icons/css3.svg';
import gitIcon from './assets/icons/git.svg';

import pageBanri from './assets/page_banri.fw.png';
import logo from './assets/logo.png';
import pageCiaci from './assets/ciaci.png';
import pageJcl from './assets/jcl.png';



const techNodes = [
  { id: 'azure', icon: azureIcon, title: 'Azure', sub: 'Cloud & Deploy', x: 50, y: 15 },
  { id: 'blazor', icon: reactIcon, title: 'Blazor', sub: 'Frontend moderno', x: 20, y: 31 },
  { id: 'csharp', icon: csharp2Icon, title: 'C#', sub: 'Código limpo', x: 80, y: 31 },
  { id: 'ibm', icon: ibmIcon, title: 'IBM MQ', sub: 'Mensageria corporativa', x: 17, y: 63 },
  { id: 'python', icon: python2Icon, title: 'Python', sub: 'Automação e integrações', x: 83, y: 63 },
  { id: 'sql', icon: databaseIcon, title: 'SQLite / SQL Server', sub: 'Banco de dados', x: 50, y: 85 },
]

const techTags = [
  { label: 'APIs REST', cls: 'tag-tl' },
  { label: 'Microsserviços', cls: 'tag-tr' },
  { label: 'Sistemas Legados', cls: 'tag-bl' },
  { label: 'Modernização', cls: 'tag-br' },
]

const stats = [
  {value: '8+', label: 'Projetos Concluídos', icon: 'bi bi-code-slash'},
  {value: '5+', label: 'Anos em Tecnologia', icon: 'bi bi-briefcase'},
  {value: '10+', label: 'Tecnologias Dominadas', icon: 'bi bi-rocket-takeoff'},
  {value: '1000+', label: 'Horas de Código', icon: 'bi bi-cup-hot'},
]





const skills = [
  { name: 'C Sharp', icon: csharpIcon },
  { name: 'ASP.NET Core', icon: dotnetIcon },
  { name: 'Blazor', icon: blazorIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Firebase', icon: firebaseIcon },
  { name: 'SQLite', icon: sqliteIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'CSS 3', icon: css3Icon },
  { name: 'Git', icon: gitIcon },
];

const projects = [
  {
    title: 'WMQ BSM - Leitor de Mensagens',
    description: 'Ferramenta web para gerenciamento de filas IBM MQ, adaptada para o ambiente do Banrisul: conecta a Queue Managers, lista filas com mensagens e permite consultá-las em tempo real.',
    status: 'EM DESTAQUE',
    tech: ['ASP.NET Core', 'Blazor', 'C#', 'IBM MQ'],
    image: pageBanri,
  },
  {
    title: 'Redesign Heráldico da CIA-CI (BACO)',
    description: 'Projeto de identidade visual criado para os bombeiros da BACO em 2011, modernizando o brasão e adequando-o às normas da Aeronáutica.',
    status: 'EM DESTAQUE',
    tech: ['FireWorks CS3', 'PhotoShop CS3'],
    image: pageCiaci,
  },
  {
    title: 'Automação de Relatórios Bancários',
    description: 'Scripts em Python para automatizar a geração e o envio de relatórios bancários, reduzindo o tempo operacional da equipe.',
    status: 'EM DESTAQUE',
    tech: ['Python', 'Automação', 'Banco'],
    image: pageJcl,
  },
]

const timeline = [
  { year: '2010', description: 'Primeiros projetos com WordPress e criação de sites.' },
  { year: '2014', description: 'Início na área técnica na Serede, atuando com instalação e manutenção de internet ADSL' },
  { year: '2017', description: 'Abertura de negócio próprio focado em Design Gráfico e soluções digitais.' },
  { year: '2021', description: 'Início da graduação em Análise e Desenvolvimento de Sistemas' },
  { year: '2023', description: 'Conclusão de ADS e ingresso em Ciência da Computação.' },
  { year: '2025', description: 'Ingresso no Banrisul como Desenvolvedor de Software, participando da modernização de sistemas' },
]

function AnimatedStatValue({ value, start }: { value: string; start: boolean }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start || target === 0) return undefined

    let rafId: number
    const duration = 1400
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [start, target])

  return <>{count}{suffix}</>
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cvStatus, setCvStatus] = useState<'idle' | 'loading' | 'done'>('idle')
  const [statsVisible, setStatsVisible] = useState(
    () => typeof window !== 'undefined' && !('IntersectionObserver' in window),
  )
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleDownloadCv = () => {
    if (cvStatus !== 'idle') return
    setCvStatus('loading')

    const link = document.createElement('a')
    link.href = '/src/assets/CurrículoMateus.pdf'
    link.download = 'Mateus-Machado-CV.pdf'
    link.click()

    window.setTimeout(() => {
      setCvStatus('done')
      window.setTimeout(() => setCvStatus('idle'), 1400)
    }, 1600)
  }

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (!previewImage) return undefined

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewImage])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.reveal-section')

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const buildContainers = document.querySelectorAll<HTMLElement>(
      '.stats-container, .skills-grid, .projects-grid, .timeline-container, .contact-grid',
    )

    if (!('IntersectionObserver' in window)) {
      buildContainers.forEach((el) => el.classList.add('in-view'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            if (entry.target.classList.contains('stats-container')) {
              setStatsVisible(true)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '-50% 0px 0px 0px', threshold: 0 },
    )

    buildContainers.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`app${isLoaded ? ' is-loaded' : ''}`}>
      <div className="page-transition-overlay" aria-hidden="true"></div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo">
              <img src={logo} alt="Mateus Machado" />
            </div>
            <div className="logo-text">
              <span><strong>Mateus</strong></span>
              <span> Machado</span>

            </div>
            
        </div>
          <nav className="nav">
            <a href="#sobre">SOBRE</a>
            <a href="#skills">SKILLS</a>
            <a href="#projetos">PROJETOS</a>
            <a href="#experiencia">EXPERIÊNCIA</a>
            <a href="#contato">CONTATO</a>
            <button
              type="button"
              className={`cv-btn${cvStatus !== 'idle' ? ' cv-btn-loading' : ''}${cvStatus === 'done' ? ' cv-btn-done' : ''}`}
              onClick={handleDownloadCv}
              disabled={cvStatus !== 'idle'}
              aria-label="Download CV"
            >
              <span className="cv-btn-label">DOWNLOAD CV</span>
              <span className="cv-btn-spinner" aria-hidden="true"></span>
              <i className="bi bi-check-lg cv-btn-check" aria-hidden="true"></i>
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <span className="label">C# • ASP.NET Core </span>
              <h1>
                Mateus Machado
              </h1>
                <span className="gradient-text">
                  Desenvolvedor .NET
                </span>
              <p>Transformo ideias em soluções digitais com código limpo e eficiente.</p>
              <p className="hero-description">
                Desenvolvedor de Software focado em modernização de sistemas legados, automação de processos e integração de aplicações, atuando com ASP.NET Core Blazor, Python e mensageria corporativa (BSM MQ).
              </p>
              <div className="hero-cta">
                <a href="#projetos" className="btn btn-primary">VER PROJETOS</a>
                <a href="#contato" className="glow-on-hover">ENTRAR EM CONTATO  <i className="bi bi-envelope section-icon" aria-hidden="true"></i></a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-tech-map" aria-label="Stack principal .NET">
                <svg className="tech-lines" viewBox="0 0 100 100" aria-hidden="true">
                  <circle className="tech-ring ring-outer" cx="50" cy="50" r="47" />
                  <circle className="tech-ring ring-inner" cx="50" cy="50" r="36" />
                  {techNodes.map((n, i) => (
                    <g key={n.id}>
                      <line className="tech-line-base" x1="50" y1="50" x2={n.x} y2={n.y} />
                      <line
                        className="tech-line-pulse"
                        pathLength="100"
                        x1="50" y1="50" x2={n.x} y2={n.y}
                        style={{ animationDelay: `${i * 0.55}s` }}
                      />
                      <line
                        className="tech-line-pulse pulse-back"
                        pathLength="100"
                        x1={n.x} y1={n.y} x2="50" y2="50"
                        style={{ animationDelay: `${i * 0.55 + 1.4}s` }}
                      />
                    </g>
                  ))}
                </svg>

                {techTags.map((t) => (
                  <span key={t.label} className={`tech-tag-pill ${t.cls}`}>{t.label}</span>
                ))}

                <div className="tech-core">
                  <img src={dotnet2Icon} alt="" className="tech-icon" />
                  <strong>.NET</strong>
                  <small>Sistemas que conectam negócios</small>
                </div>

                {techNodes.map((n, i) => (
                  <div
                    key={n.id}
                    className="tech-node"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * -0.8}s` }}
                  >
                    {n.icon ? (
                      <img src={n.icon} alt="" className="tech-icon" />
                    ) : (
                      
                      <span className="tech-wordmark">IBM</span>
                    )}
                    
                    <small>{n.sub}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section about reveal-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <div className="section-title-container">
                  <div>
                    <i className="bi bi-person section-icon" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h2 className="section-title">SOBRE MIM</h2>
                  </div>
                </div>
                
                
                <p>
                  Desenvolvedor de software com experiência em modernização de sistemas legados, automação de processos e integração de aplicações.
                  Atuo em ambientes híbridos, unindo tecnologias modernas e sistemas críticos, sempre com foco em escalabilidade, performance e confiabilidade.
                  Tenho sólida vivência em ASP.NET Core Blazor, Python e mensageria corporativa (BSM MQ), além de forte capacidade analítica e trabalho colaborativo em equipes multidisciplinares.
                </p>
              </div>
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="stat" style={{ '--i': index } as React.CSSProperties}>
                    <div className="stat-icon">
                      <i className={stat.icon} aria-hidden="true"></i>
                    </div>
                    <div className="stat-value">
                      <AnimatedStatValue value={stat.value} start={statsVisible} />
                    </div>
                    <div className="stat-label">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills reveal-section">
          <div className="container">
            <div className="section-title-container">
              <div>
                <i className="bi bi-code-slash section-icon" aria-hidden="true"></i>
              </div>
              <div>
                <h2 className="section-title">MINHAS SKILLS</h2>
              </div>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item" style={{ '--i': index } as React.CSSProperties}>
                  <div className="skill-icon">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <i className={skill.icon} aria-hidden="true"></i>
                    )}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section projects reveal-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-container">
                <div>
                  <i className="bi bi-folder section-icon" aria-hidden="true"></i>
                </div>
                <div>
                  <h2 className="section-title">PROJETOS EM DESTAQUE</h2>
                </div>
              </div>
              <a href="#" className="view-all">VER TODOS NO GITHUB →</a>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`project-card${project.image ? ' has-image' : ''}`}
                  style={{ '--i': index } as React.CSSProperties}
                >
                  {project.image && (
                    <button
                      type="button"
                      className="project-preview"
                      onClick={() => setPreviewImage(project.image!)}
                      aria-label={`Ver print do projeto ${project.title}`}
                    >
                      <img src={project.image} alt={`Print do projeto ${project.title}`} />
                      <span className="project-preview-overlay">
                        <i className="bi bi-zoom-in" aria-hidden="true"></i>
                        <span>Ver print</span>
                      </span>
                    </button>
                  )}
                  <span className="project-badge">{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="section timeline reveal-section">
          <div className="container">
              <div className="section-title-container">
                <div>
                  <i className="bi bi-signpost-2-fill section-icon" aria-hidden="true"></i>
                </div>
                <div>
                  <h2 className="section-title">JORNADA</h2>
                </div>
              </div>                     
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="timeline-item"
                  style={{ '--i': index } as React.CSSProperties}
                >
                  <div className="timeline-marker">{item.year}</div>
                  <div className="timeline-content">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="contato" className="section contact reveal-section">
          <div className="container">
            <div className="section-title-container">
              <div>
                <i className="bi bi-send section-icon" aria-hidden="true"></i>
              </div>
              <div>
                <h2 className="section-title">VAMOS CONVERSAR?</h2>
              </div>
            </div>
            <p className="contact-description">Estou sempre aberto a novas ideias, projetos, parcerias e oportunidades.</p>
            <div className="contact-grid">
              <a href="mailto:mateusmachado.s@hotmail.com" className="contact-card" style={{ '--i': 0 } as React.CSSProperties}>
                <div className="contact-content">
                  <div className="contact-top">
                    
                    <img src={outlookIcon} alt="Outlook" className="contact-icon" />
                    
                    <h3>EMAIL</h3>
                  </div>
                  {/*<p>mateusmachado.s@hotmail.com</p>*/}
                </div>
              </a>

              <a href="https://linkedin.com/in/mateusmachado91" target="_blank" rel="noreferrer" className="contact-card" style={{ '--i': 1 } as React.CSSProperties}>
                <div className="contact-content">
                  <div className="contact-top">
                    <i className="bi bi-linkedin contact-icon"></i>
                    <h3>LINKEDIN</h3>
                  </div>
                  {/*<p>/in/mateusmachado91</p>*/}
                </div>
              </a>

              <a href="https://github.com/MateusMachado91" target="_blank" rel="noreferrer" className="contact-card" style={{ '--i': 2 } as React.CSSProperties}>
                <div className="contact-content">
                  <div className="contact-top">
                    <i className="bi bi-github contact-icon"></i>
                    <h3>GITHUB</h3>
                  </div>
                  {/*<p>/MateusMachado91</p>*/}
                </div>
              </a>

              <a href="https://wa.me/5551986029959" target="_blank" rel="noreferrer" className="contact-card" style={{ '--i': 3 } as React.CSSProperties}>
                <div className="contact-content">
                  <div className="contact-top">
                    <i className="bi bi-whatsapp contact-icon"></i>
                    <h3>WHATSAPP</h3>
                  </div>
                  {/*<p>+55 51 98602-9959</p>*/}
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Mateus Machado da Silva. Todos os direitos reservados.</p>
      </footer>

      {previewImage && (
        <div className="image-lightbox" role="dialog" aria-modal="true" onClick={() => setPreviewImage(null)}>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={() => setPreviewImage(null)}
            aria-label="Fechar visualização"
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
          <img
            src={previewImage}
            alt="Print ampliado do projeto"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default App
