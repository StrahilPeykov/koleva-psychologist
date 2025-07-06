import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: string | ReactNode
  details?: string[]
  className?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  details,
  className = "" 
}: ServiceCardProps) {
  return (
    <div className={`group card bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300 border border-warm-sand/30 hover:border-warm-terracotta/30 transform hover:scale-[1.02] ${className}`}>
      <div className="text-center space-y-5">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-warm-sand/30 to-warm-beige/30 rounded-2xl flex items-center justify-center group-hover:from-warm-terracotta/20 group-hover:to-warm-rose/20 transition-all duration-500 transform group-hover:rotate-3">
            {typeof icon === 'string' ? (
              <span className="text-3xl" role="img" aria-hidden="true">
                {icon}
              </span>
            ) : (
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-warm-charcoal group-hover:text-warm-terracotta transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-warm-olive text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Details list (if provided) */}
        {details && details.length > 0 && (
          <div className="pt-5 border-t border-warm-sand/50">
            <ul className="space-y-2 text-xs text-warm-olive">
              {details.slice(0, 3).map((detail, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-warm-terracotta rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>{detail}</span>
                </li>
              ))}
              {details.length > 3 && (
                <li className="text-warm-terracotta font-medium group-hover:text-warm-rose transition-colors duration-300">
                  + {details.length - 3} повече...
                </li>
              )}
            </ul>
          </div>
        )}
        
        {/* Hover effect decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-terracotta/0 via-warm-rose/0 to-warm-terracotta/0 group-hover:from-warm-terracotta/5 group-hover:via-warm-rose/5 group-hover:to-warm-terracotta/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}