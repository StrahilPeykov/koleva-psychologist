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
    <div className={`group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 hover:border-soft-blue/20 ${className}`}>
      <div className="space-y-4">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-powder-blue/10 to-sky-blue/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {typeof icon === 'string' ? (
              <span className="text-2xl" role="img" aria-hidden="true">
                {icon}
              </span>
            ) : (
              icon
            )}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-charcoal text-center">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-medium text-sm leading-relaxed text-center">
          {description}
        </p>
        
        {/* Details list (if provided) */}
        {details && details.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <ul className="space-y-1.5 text-xs text-gray-medium">
              {details.slice(0, 3).map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>{detail}</span>
                </li>
              ))}
              {details.length > 3 && (
                <li className="text-soft-blue font-medium pl-3.5">
                  + {details.length - 3} повече...
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}