import React, { useState } from 'react';
import Layout from './components/Layout';
import HtmlStripperTool from './components/HtmlStripperTool';
import Modal from './components/Modal';
import { SeoArticleModalContent } from './components/SeoArticleModalContent';
import { ModalType } from './types';
import { AboutContent } from './components/modalContent/AboutContent';
import { ContactContent } from './components/modalContent/ContactContent';
import { PrivacyContent } from './components/modalContent/PrivacyContent';
import { TermsContent } from './components/modalContent/TermsContent';
import { DmcaContent } from './components/modalContent/DmcaContent';

const modalContentMap: Record<ModalType, React.ReactNode> = {
  [ModalType.NONE]: null,
  [ModalType.GUIDE]: <SeoArticleModalContent />,
  [ModalType.ABOUT]: <AboutContent />,
  [ModalType.CONTACT]: <ContactContent />,
  [ModalType.PRIVACY]: <PrivacyContent />,
  [ModalType.TERMS]: <TermsContent />,
  [ModalType.DMCA]: <DmcaContent />
};

const modalTitleMap: Record<ModalType, string> = {
  [ModalType.NONE]: '',
  [ModalType.GUIDE]: "Guide & SEO Article",
  [ModalType.ABOUT]: "About This Tool",
  [ModalType.CONTACT]: "Contact Us",
  [ModalType.PRIVACY]: "Privacy Policy",
  [ModalType.TERMS]: "Terms of Service",
  [ModalType.DMCA]: "DMCA Policy"
}

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(ModalType.NONE);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(ModalType.NONE);

  return (
    <>
      <Layout onOpenModal={openModal}>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <header className="text-center mb-10 md:mb-14">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-2">
              HTML/Text Stripper
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Paste, clean, and copy. Instantly convert HTML to plain text with this secure, browser-based tool.
            </p>
          </header>
          <main>
            <HtmlStripperTool />
          </main>
        </div>
      </Layout>
      <Modal 
        isOpen={activeModal !== ModalType.NONE} 
        onClose={closeModal} 
        title={modalTitleMap[activeModal] || ''}
      >
        {modalContentMap[activeModal]}
      </Modal>
    </>
  );
};

export default App;