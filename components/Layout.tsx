import React from 'react';
import { ModalType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onOpenModal: (modal: ModalType) => void;
}

const NavLink: React.FC<{ onClick: () => void; children: React.ReactNode; }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">
        {children}
    </button>
);

const Layout: React.FC<LayoutProps> = ({ children, onOpenModal }) => {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-x-hidden animated-galaxy">
      <div className="relative z-10 flex flex-col min-h-screen bg-black/20">
        <header className="w-full bg-black/30 backdrop-blur-sm sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-3 flex justify-center items-center">
            <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              <NavLink onClick={() => onOpenModal(ModalType.ABOUT)}>About</NavLink>
              <NavLink onClick={() => onOpenModal(ModalType.GUIDE)}>Guide</NavLink>
              <NavLink onClick={() => onOpenModal(ModalType.CONTACT)}>Contact</NavLink>
              <NavLink onClick={() => onOpenModal(ModalType.PRIVACY)}>Privacy</NavLink>
              <NavLink onClick={() => onOpenModal(ModalType.TERMS)}>Terms</NavLink>
              <NavLink onClick={() => onOpenModal(ModalType.DMCA)}>DMCA</NavLink>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="w-full bg-black/30 backdrop-blur-sm py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold transition-colors duration-300" style={{color: '#FFD700', textDecoration: 'none'}}>
                Powered by HSINI MOHAMED
              </a>
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
              <span>&bull;</span>
              <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
