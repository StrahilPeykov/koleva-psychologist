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
    <div className={`group card bg-white rounded-xl shadow-soft p-6 hover:shadow-soft-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 ${className}`}>
      <div className="text-center space-y-4">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
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
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Details list (if provided) */}
        {details && details.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <ul className="space-y-2 text-xs text-gray-500">
              {details.slice(0, 3).map((detail, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>{detail}</span>
                </li>
              ))}
              {details.length > 3 && (
                <li className="text-blue-600 font-medium">
                  + {details.length - 3} повече...
                </li>
              )}
            </ul>
          </div>
        )}
        
        {/* Hover effect decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/20 group-hover:to-blue-100/10 rounded-xl transition-all duration-300 pointer-events-none"></div>
      </div>
    </div>
  )
}