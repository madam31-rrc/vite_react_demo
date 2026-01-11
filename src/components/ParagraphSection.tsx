import './ParagraphSection.css';

// src/components/paragraph-section/para.tsx
// export a component that maps an array of strings into divs within a paragraph
// note PascalCase is the naming convention for components
function ParagraphSection({text}: {text:string[]}) {
    return(
        // rather than the "class" property we use "className" in tsx
        <section className="paragraph-section">
            This section iterates over paragraph properties that are passed in by 
            whatever parent renders this component.
            {text.map(t =>  <p>{t}</p>)}
        </section>
    );
};

export default ParagraphSection;