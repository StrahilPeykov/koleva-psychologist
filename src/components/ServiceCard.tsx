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
    <div className={`group card bg-white rounded-2xl shadow-soft p-8 hover:shadow-soft-lg transition-all duration-300 border border-gray-cream/30 hover:border-soft-blue/30 transform hover:scale-[1.02] ${className}`}>
      <div className="text-center space-y-5">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-powder-blue/20 to-sky-blue/20 rounded-2xl flex items-center justify-center group-hover:from-soft-blue/20 group-hover:to-sky-blue/30 transition-all duration-500 transform group-hover:rotate-3">
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
        <h3 className="text-xl font-semibold text-charcoal group-hover:text-soft-blue transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-medium text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Details list (if provided) */}
        {details && details.length > 0 && (
          <div className="pt-5 border-t border-gray-cream/50">
            <ul className="space-y-2 text-xs text-gray-medium">
              {details.slice(0, 3).map((detail, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-soft-blue rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                  <span>{detail}</span>
                </li>
              ))}
              {details.length > 3 && (
                <li className="text-soft-blue font-medium group-hover:text-sky-blue transition-colors duration-300">
                  + {details.length - 3} повече...
                </li>
              )}
            </ul>
          </div>
        )}
        
        {/* Hover effect decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/0 via-sky-blue/0 to-soft-blue/0 group-hover:from-soft-blue/5 group-hover:via-sky-blue/5 group-hover:to-soft-blue/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}