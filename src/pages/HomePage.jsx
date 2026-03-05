import {React,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/icons';
import services from '../data/services';
import projects from '../data/projects';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import '../styles/HomePage.css';
import heroBg from '../assets/images/hero-bgd.png'
import HeroSection from '../components/HeroSection';
// import Particules from '../components/Particules';

export const HomePage = () => {
  const aboutRef = useRef(null);

  const featuredProjects = projects.slice(0, 3);


  return (


    <>
      {/* Section d'en-tête avec titre, description et appel à l'action */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white bg-hero overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 text-center animate__animated animate__fadeInDown animate__faster" style={{zIndex:1}}>
          <HeroSection/>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-5 bg-transparent text-light" style={{minHeight:'80vh', display:'flex', alignItems:'center'}}>
        <div className="container h-100">
          <div className="row align-items-center g-5 h-100">
            <div className="col-lg-6 mb-5 mb-lg-0 d-flex justify-content-center h-100">
              <div className="laptop-frame d-flex flex-column align-items-center justify-content-center h-100" style={{height:'100%'}}>
                <div className="laptop-screen rounded-4 shadow-lg overflow-hidden d-flex align-items-center justify-content-center" style={{width:'100%', maxWidth:640, height:'60vh', minHeight:220, background:'#222', border:'10px solid #bbb568', position:'relative'}}>
                  <img src="/profil.jpg" alt="Développeur professionnel" className="img-fluid w-100 h-100" style={{objectFit:'cover', objectPosition:'center'}} />
                </div>
                <div className="laptop-base" style={{width:'90%', minWidth:220, maxWidth:620, height:32, background:'#e2dc89', borderRadius:'0 0 20px 20px', marginTop:-10, boxShadow:'0 4px 12px rgba(0,0,0,0.15)'}}></div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="mb-4 animate__animated animate__fadeInLeft">À Propos de Moi</h2>
              <p className="lead mb-4">
                <strong className="text-info">Freelance Conceptrice Développeuse JAVA && JAVASCRIPT</strong>, passionnée par la création de solutions sur mesure qui répondent aux besoins spécifiques de chaque client. Avec une approche centrée sur l'utilisateur et une écoute attentive, je transforme vos idées en applications web performantes et intuitives. Curieuse, persévérante et adaptable, je collabore étroitement avec mes clients pour comprendre leurs enjeux et livrer des produits de qualité. Je m’intéresse particulièrement au clean code, à l’expérience utilisateur (UX), à l’optimisation des performances et à la satisfaction client. Mon objectif est de vous accompagner dans vos projets digitaux, en offrant des services personnalisés et un suivi dédié pour garantir votre succès.
              </p>
              <Link to='/about' className='mt-3 btn btn-outline-info animate__animated animate__fadeInUp'>En savoir Plus sur Mon Parcours</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-5 bg-transparent">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <h2 className="animate__animated animate__fadeInDown">Mes Compétences</h2>
              <p>Une expertise spécialisée pour donner vie à vos visions digitales</p>
            </div>
          </div>
          <div className="row g-4">
            {services.slice(0, 3).map(service => (
              <div key={service.id} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <Link to="/services" className="btn btn-outline-info animate__animated animate__fadeInUp">
                Tous les Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets récents */}
      <section className='py-5 bg-transparent'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-lg-6 text-center'>
              <h2 className="animate__animated animate__fadeInDown">Projets Récents</h2>
              <p>Une sélection de mes réalisations</p>
            </div>
          </div>
          <div className='row g-4'>
            {featuredProjects.map(project => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
                <ProjectCard
                  project={project}
                  showDescription={false}
                  showtechnologies={false}
                />
              </div>
            ))}
          </div>
          <div className='row mt-4'>
            <div className='col text-center'>
              <Link to='/portfolio' className='btn btn-outline-info animate__animated animate__fadeInUp'>
                Voir tous les projets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="my-5 py-5 bg-cta text-white animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start g-4">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p className="text-secondary text-uppercase fw-bold display-5">En ce moment</p>
            </div>
            <div className="col-lg-8">
              <h2 className="mb-3">Je suis disponible pour un nouveau projet</h2>
              <p className="mb-4">Collaborons pour créer quelque chose d'innovant ensemble.</p>
              <Link to="/contact" className="btn btn-light btn-lg animate__animated animate__pulse animate__infinite">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
