export function AnimatedWaterBackground() {
  return (
    <>
      <style>
        {`
          .water-wave-1 {
            animation: wave1 8s ease-in-out infinite;
            transform-origin: center;
          }
          
          .water-wave-2 {
            animation: wave2 12s ease-in-out infinite reverse;
            transform-origin: center;
          }
          
          .water-wave-3 {
            animation: wave3 15s ease-in-out infinite;
            transform-origin: center;
          }
          
          .particle-1 {
            animation: float1 8s ease-in-out infinite;
          }
          
          .particle-2 {
            animation: float2 10s ease-in-out infinite;
          }
          
          .particle-3 {
            animation: float3 12s ease-in-out infinite;
          }
          
          @keyframes wave1 {
            0%, 100% { 
              transform: translateY(0px) scale(1);
            }
            25% { 
              transform: translateY(-10px) scale(1.02);
            }
            50% { 
              transform: translateY(5px) scale(0.98);
            }
            75% { 
              transform: translateY(-5px) scale(1.01);
            }
          }
          
          @keyframes wave2 {
            0%, 100% { 
              transform: translateX(0px) translateY(0px);
            }
            25% { 
              transform: translateX(-15px) translateY(8px);
            }
            50% { 
              transform: translateX(0px) translateY(-12px);
            }
            75% { 
              transform: translateX(15px) translateY(6px);
            }
          }
          
          @keyframes wave3 {
            0%, 100% { 
              transform: translateX(0px) translateY(0px);
            }
            33% { 
              transform: translateX(20px) translateY(-8px);
            }
            66% { 
              transform: translateX(-10px) translateY(4px);
            }
          }
          
          @keyframes float1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-30px) translateX(15px);
              opacity: 0.8;
            }
          }
          
          @keyframes float2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px);
              opacity: 0.2;
            }
            50% { 
              transform: translateY(-25px) translateX(-10px);
              opacity: 0.6;
            }
          }
          
          @keyframes float3 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px);
              opacity: 0.4;
            }
            50% { 
              transform: translateY(-20px) translateX(20px);
              opacity: 0.9;
            }
          }
        `}
      </style>
      
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waterGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(37, 99, 235, 0.3)" />
              <stop offset="100%" stopColor="rgba(29, 78, 216, 0.4)" />
            </linearGradient>
            
            <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(96, 165, 250, 0.15)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.25)" />
            </linearGradient>
            
            <linearGradient id="waterGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 197, 253, 0.1)" />
              <stop offset="100%" stopColor="rgba(96, 165, 250, 0.2)" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Main wave */}
          <path
            d="M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z"
            fill="url(#waterGradient1)"
            className="water-wave-1"
          />
          
          {/* Wave 2 - Secondary wave */}
          <path
            d="M0,350 Q200,300 400,350 T800,350 T1200,350 L1200,600 L0,600 Z"
            fill="url(#waterGradient2)"
            className="water-wave-2"
          />
          
          {/* Wave 3 - Background wave */}
          <path
            d="M0,400 Q100,370 200,400 T400,400 T600,400 T800,400 T1000,400 T1200,400 L1200,600 L0,600 Z"
            fill="url(#waterGradient3)"
            className="water-wave-3"
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 rounded-full particle-${i % 3 + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        
        {/* Additional glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      </div>
    </>
  );
}