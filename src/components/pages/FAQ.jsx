import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Button from '../buttons/Button';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [faqData, setFaqData] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    fetch('/data/faq.json')
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((err) => console.error('Error al carregar les FAQs:', err));
  }, []);

  return (
    <div className="bg-base-200 max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-[Righteous] text-center mb-8 text-[color:var(--color-base-content)]">
        Preguntes Freqüents
      </h1>

      {!activeCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(faqData).map(([key, category]) => (
            <Card
              key={key}
              title={category.title}
              description={`Explora preguntes sobre ${category.title.toLowerCase()}`}
              icon={<HelpCircle size={48} />}
              actionText="Veure preguntes"
              onClick={() => {
                setActiveCategory(key);
                setActiveQuestion(null);
              }}
            />
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[color:var(--color-base-content)]">
              {faqData[activeCategory]?.title}
            </h2>
            <Button variant="neutral" onClick={() => { setActiveCategory(null); setActiveQuestion(null); }}>
              Tornar
            </Button>
          </div>

          <div className="space-y-4">
            {faqData[activeCategory]?.questions?.map((item) => (
              <div
                key={item.id}
                className="border border-[color:var(--color-base-300)] rounded-[var(--radius-box)] p-4 bg-[color:var(--color-base-100)]"
              >
                <button
                  className="flex justify-between items-center w-full font-semibold text-[color:var(--color-base-content)]"
                  onClick={() => setActiveQuestion(activeQuestion === item.id ? null : item.id)}
                >
                  {item.question}
                  {activeQuestion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeQuestion === item.id && (
                  <p className="mt-2 text-[color:var(--color-base-content)] opacity-70">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
