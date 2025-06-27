import GridMotion from "./GridMotion";
import { Globe, Wallet, Smartphone, Building2 } from "lucide-react";

const cardClass =
  "flex flex-col items-center justify-center gap-2 p-6 rounded-2xl  shadow-lg min-h-[180px] min-w-[180px] max-w-[240px] mx-auto";
const iconClass = "w-10 h-10 mb-2 text-blue-400";

const items = [
  <div key="crypto-nomads" className={cardClass}>
    <Globe className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
    </div>
  </div>,
  <div key="remote-workers" className={cardClass}>
    <Wallet className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Digital nomads with stablecoin / card access needing reliable cross-border data
    </div>
  </div>,
  <div key="web3-device" className={cardClass}>
    <Smartphone className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
    </div>
  </div>,
  <div key="web2-enterprises" className={cardClass}>
    <Building2 className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Wearables / IoT firms needing always-on global eSIM infra without telco hassle
    </div>
  </div>,
  // repeat to fill grid
  <div key="crypto-nomads2" className={cardClass}>
    <Globe className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
    </div>
  </div>,
  <div key="remote-workers2" className={cardClass}>
    <Wallet className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Digital nomads with stablecoin / card access needing reliable cross-border data
    </div>
  </div>,
  <div key="web3-device2" className={cardClass}>
    <Smartphone className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
    </div>
  </div>,
  <div key="web2-enterprises2" className={cardClass}>
    <Building2 className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Wearables / IoT firms needing always-on global eSIM infra without telco hassle
    </div>
  </div>,
  // repeat again for grid fill
  <div key="crypto-nomads3" className={cardClass}>
    <Globe className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
    </div>
  </div>,
  <div key="remote-workers3" className={cardClass}>
    <Wallet className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Digital nomads with stablecoin / card access needing reliable cross-border data
    </div>
  </div>,
  <div key="web3-device3" className={cardClass}>
    <Smartphone className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
    </div>
  </div>,
  <div key="web2-enterprises3" className={cardClass}>
    <Building2 className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Wearables / IoT firms needing always-on global eSIM infra without telco hassle
    </div>
  </div>, <div key="crypto-nomads3" className={cardClass}>
    <Globe className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
    </div>
  </div>,
  <div key="remote-workers3" className={cardClass}>
    <Wallet className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Digital nomads with stablecoin / card access needing reliable cross-border data
    </div>
  </div>,
  <div key="web3-device3" className={cardClass}>
    <Smartphone className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
    </div>
  </div>,
  <div key="web2-enterprises3" className={cardClass}>
    <Building2 className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Wearables / IoT firms needing always-on global eSIM infra without telco hassle
    </div>
  </div>, <div key="crypto-nomads3" className={cardClass}>
    <Globe className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
    </div>
  </div>,
  <div key="remote-workers3" className={cardClass}>
    <Wallet className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Digital nomads with stablecoin / card access needing reliable cross-border data
    </div>
  </div>,
  <div key="web3-device3" className={cardClass}>
    <Smartphone className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
    </div>
  </div>,
  <div key="web2-enterprises3" className={cardClass}>
    <Building2 className={iconClass} />
    <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
    <div className="text-sm text-blue-100 text-center opacity-90">
      Wearables / IoT firms needing always-on global eSIM infra without telco hassle
    </div>
  </div>,
   <div key="crypto-nomads3" className={cardClass}>
   <Globe className={iconClass} />
   <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
   <div className="text-sm text-blue-100 text-center opacity-90">
     Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
   </div>
 </div>,
 <div key="remote-workers3" className={cardClass}>
   <Wallet className={iconClass} />
   <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
   <div className="text-sm text-blue-100 text-center opacity-90">
     Digital nomads with stablecoin / card access needing reliable cross-border data
   </div>
 </div>,
 <div key="web3-device3" className={cardClass}>
   <Smartphone className={iconClass} />
   <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
   <div className="text-sm text-blue-100 text-center opacity-90">
     Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
   </div>
 </div>,
 <div key="web2-enterprises3" className={cardClass}>
   <Building2 className={iconClass} />
   <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
   <div className="text-sm text-blue-100 text-center opacity-90">
     Wearables / IoT firms needing always-on global eSIM infra without telco hassle
   </div>
 </div>,
  <div key="crypto-nomads3" className={cardClass}>
  <Globe className={iconClass} />
  <div className="font-bold text-lg mb-1 text-white">Crypto Nomads</div>
  <div className="text-sm text-blue-100 text-center opacity-90">
    Web3 users traveling globally for events, prefer crypto-native, plug-and-play eSIMs
  </div>
</div>,
<div key="remote-workers3" className={cardClass}>
  <Wallet className={iconClass} />
  <div className="font-bold text-lg mb-1 text-white">Remote Workers</div>
  <div className="text-sm text-blue-100 text-center opacity-90">
    Digital nomads with stablecoin / card access needing reliable cross-border data
  </div>
</div>,
<div key="web3-device3" className={cardClass}>
  <Smartphone className={iconClass} />
  <div className="font-bold text-lg mb-1 text-white">Web3 Device</div>
  <div className="text-sm text-blue-100 text-center opacity-90">
    Projects like Solana / Ethereum mobile needing embedded, dApp-ready connectivity
  </div>
</div>,
<div key="web2-enterprises3" className={cardClass}>
  <Building2 className={iconClass} />
  <div className="font-bold text-lg mb-1 text-white">Web2 Enterprises</div>
  <div className="text-sm text-blue-100 text-center opacity-90">
    Wearables / IoT firms needing always-on global eSIM infra without telco hassle
  </div>
</div>,
];

export default function WhoIsGeSIMFor() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-12 text-center tracking-tight">Who is GeSIM for</h2>
      <div className="w-full max-w-screen-2xl h-[80vh] mx-auto">
      <GridMotion items={items} gradientColor="black" />
      </div>
    </section>
  );
} 