'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Euro, Phone, Shield, Globe, Heart, Mail } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'Как да разбера дали имам нужда от психологическа помощ?',
    answer: 'Ако изпитвате продължителни емоционални трудности, проблеми във взаимоотношенията, стрес или тревожност, които засягат ежедневието ви, психологическата помощ може да бъде полезна. Не е нужно да чакате ситуацията да стане критична.',
    icon: <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-soft-blue" />
  },
  {
    id: 2,
    category: 'practical',
    question: 'Колко продължава една сесия и колко струва?',
    answer: 'Всяка сесия продължава 90 минути и струва 70 лв. Първата консултация може да бъде безплатна 15-минутна среща, за да се запознаем и да обсъдим вашите нужди.',
    icon: <Clock className="w-4 h-4 md:w-5 md:h-5 text-sky-blue" />
  },
  {
    id: 3,
    category: 'practical',
    question: 'Как мога да запазя час?',
    answer: 'Можете да запазите час онлайн чрез Calendly системата ни, да се обадите на +359 888 494 533 или да изпратите имейл на olgakoleva@abv.bg. Обикновено отговарям в рамките на 24 часа.',
    icon: <Phone className="w-4 h-4 md:w-5 md:h-5 text-steel-blue" />
  },
  {
    id: 4,
    category: 'privacy',
    question: 'Дискретни ли са сесиите? Какво е с поверителността?',
    answer: 'Абсолютно. Спазвам професионална тайна и всичко споделено остава строго поверително. Информацията не се споделя с никого без вашето писмено съгласие, освен в законово предвидените случаи.',
    icon: <Shield className="w-4 h-4 md:w-5 md:h-5 text-powder-blue" />
  },
  {
    id: 5,
    category: 'practical',
    question: 'Предлагате ли онлайн консултации?',
    answer: 'Да, предлагам онлайн консултации чрез сигурни платформи като Zoom. Това е удобно за клиенти извън Бургас или при невъзможност за присъствено посещение.',
    icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
  },
  {
    id: 6,
    category: 'general',
    question: 'Колко дълго трае терапията?',
    answer: 'Продължителността зависи от индивидуалните нужди и целите. Някои клиенти се чувстват по-добре след няколко сесии, други предпочитат по-дълга работа. Винаги обсъждаме напредъка и планът може да се адаптира.',
    icon: <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
  },
  {
    id: 7,
    category: 'practical',
    question: 'На какви езици провеждате консултации?',
    answer: 'Провеждам консултации на български, руски и английски език. Можете да изберете езика, на който се чувствате най-комфортно да се изразявате.',
    icon: <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
  },
  {
    id: 8,
    category: 'practical',
    question: 'Какви са начините за плащане?',
    answer: 'Приемам плащане в брой в офиса, банков превод или с банкова карта чрез ПОС терминал. Плащането се извършва преди или след сесията според вашето предпочитание.',
    icon: <Euro className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
  },
  {
    id: 9,
    category: 'general',
    question: 'Какво да очаквам от първата сесия?',
    answer: 'Първата сесия е за запознаване и разбиране на вашата ситуация. Ще обсъдим причините за търсене на помощ, вашите цели и как мога да ви помогна. Няма да има "домашни", просто ще се опознаем.',
    icon: <Heart className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
  },
  {
    id: 10,
    category: 'privacy',
    question: 'Могат ли близките ми да научат за терапията?',
    answer: 'Не, освен ако не дадете изрично съгласие. Информацията за терапията е защитена от професионална тайна. Дори самото посещение при психолог остава поверително.',
    icon: <Shield className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
  }
];

const categories = [
  { id: 'all', name: 'Всички въпроси', color: 'gray' },
  { id: 'general', name: 'Общи въпроси', color: 'blue' },
  { id: 'practical', name: 'Практични въпроси', color: 'green' },
  { id: 'privacy', name: 'Поверителност', color: 'purple' }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4">
              Често задавани въпроси
            </h2>
            <div className="w-16 md:w-20 h-1 bg-soft-blue mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-medium">
              Отговори на най-честите въпроси за психологическите услуги
            </p>
          </div>

          {/* Category Filter - Scrollable on mobile */}
          <div className="flex overflow-x-auto pb-2 mb-6 md:mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-soft-blue text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-soft-blue hover:text-soft-blue'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3 md:space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 md:p-6 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-3 md:space-x-4 flex-1">
                    <div className="mt-0.5 md:mt-1">
                      {faq.icon}
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-charcoal pr-2 md:pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-2 md:ml-4">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-4 pb-4 md:px-6 md:pb-6 md:pl-16">
                    <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                      <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg md:text-xl font-semibold text-charcoal mb-3 md:mb-4">
                Не намерихте отговор на въпроса си?
              </h3>
              <p className="text-gray-medium mb-4 md:mb-6 text-sm md:text-base">
                Свържете се с мен директно за персонализиран отговор
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="px-4 md:px-6 py-2.5 md:py-3 bg-soft-blue text-white rounded-lg hover:bg-steel-blue transition-colors text-sm md:text-base">
                  <a href="tel:+359888494533" className="flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
                    Обадете се
                  </a>
                </button>
                <button className="px-4 md:px-6 py-2.5 md:py-3 border border-soft-blue text-soft-blue rounded-lg hover:bg-soft-blue/10 transition-colors text-sm md:text-base">
                  <a href="mailto:olgakoleva@abv.bg" className="flex items-center justify-center">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
                    Пишете имейл
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Tips - Mobile Optimized */}
          <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-blue-50 rounded-xl p-4 md:p-6 border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Подготовка за първата сесия
              </h4>
              <ul className="space-y-1.5 md:space-y-2 text-blue-800 text-xs md:text-sm">
                <li>• Помислете какво искате да постигнете</li>
                <li>• Не се притеснявайте да споделите всичко</li>
                <li>• Дойдете 10 минути по-рано</li>
                <li>• Носете удобни дрехи</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4 md:p-6 border border-green-100">
              <h4 className="font-semibold text-green-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Ваши права като клиент
              </h4>
              <ul className="space-y-1.5 md:space-y-2 text-green-800 text-xs md:text-sm">
                <li>• Право на пълна поверителност</li>
                <li>• Право на уважение и достойнство</li>
                <li>• Право да прекратите терапията</li>
                <li>• Право на информация за процеса</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}