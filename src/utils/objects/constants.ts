export const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/njAcNGpZ5g',
    icon: 'MessageCircle',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/playlist?list=PLv1oZVAdDlsUu8FpXRZ1MGeYaxA3V_65R&si=M9tO2HkVYL7q-3lH',
    icon: 'Youtube',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/raoumerofficial?igsh=enluN3loazgxanVm',
    icon: 'Instagram',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
];
export const youtubeVideos = [
  {
    id: "UU_CZTlVRn8",
    title: "Supply & Demand Zones Explained – Master the Core of Smart Money Trading",
    embed: "https://www.youtube.com/embed/UU_CZTlVRn8?si=EFnzJ8aaUeQQeeFB",
    url: "https://www.youtube.com/watch?v=UU_CZTlVRn8",
  },
  // {
  //   title: "RTC - Smart Money Concepts Explained",
  //   embed: "https://www.youtube.com/embed/YabA-kLv4rE?si=BUsWwQAYF8ThejGn",
  //   url: "https://www.youtube.com/watch?v=YabA-kLv4rE",
  // },
  // {
  //   title: "RTC - Volume Spread Analysis Masterclass",
  //   embed: "https://www.youtube.com/embed/TazeBFTe2-o?si=ez1kiNJwFCBGIfln",
  //   url: "https://www.youtube.com/watch?v=TazeBFTe2-o",
  // },
  // {
  //   title: "RTC - Institutional Trading Secrets",
  //   embed: "https://www.youtube.com/embed/DgfaeHEWArE?si=K47myyov-3HYb-vr",
  //   url: "https://www.youtube.com/watch?v=DgfaeHEWArE",
  // },
];
export interface CommunityStats {
  members: string;
  winRate: string;
  newsTradeExperts: boolean;
  tradersMentored: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeroContent {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutContent {
  title: string;
  description: string;
}
import { Users, Award, Globe, Target, Ticket, ChartArea, CandlestickChart } from "lucide-react";
import { DollarSign, Star } from "lucide-react";
import { Sparkles } from "lucide-react";
export const servicesList = [
  {
    id: 1,
    icon: CandlestickChart,
    title: 'Forex Signals Group',
    description: 'Get accurate and professional forex signals directly from Rao Umer\'s analysis. Our signals cover gold and major forex pairs.',
    features: [
      { icon: Globe, text: 'Discord VIP signals channel access' },
      { icon: Ticket, text: 'Real time market analysis' },
      { icon: Target, text: 'On demand Analysis' },
      { icon: ChartArea, text: 'VIP Chat access' }
    ],
    gradient: 'var(--gradient-blue)',
    delay: 0.2
  },
  {
    id: 2,
    icon: Star,
    title: 'RTC Mentorship Program',
    description: 'From basics to advanced concepts, learn trading with expert guidance and practical methods in RTC mentorship program.',
    features: [
      { icon: Sparkles, text: 'Direct access to mentor through exclusive chat' },
      { icon: Star, text: 'Learn ICT, SMC, VSA, Wyckoff, Elliott Waves & more' },
      { icon: Target, text: 'Urdu/Hindi Language' }
    ],
    gradient: 'var(--gradient-green)',
    delay: 0.4,
    btn: true
  }
];
export const initialLivePairs = [
  {
    pair: "BTC/USD",
    price: "0",
    change: "0",
    changePercent: "0%",
    volume: "-",
    gradient: "linear-gradient(135deg, #f7931a, #ffcc80)",
    icon: DollarSign,
    symbol: "BTC",
    history: [] as number[],
  },
  {
    pair: "XAU/USD",
    price: "0",
    change: "0",
    changePercent: "0%",
    volume: "-",
    gradient: "linear-gradient(135deg, #ffd700, #fffbe6)",
    icon: Star,
    symbol: "XAU",
    history: [] as number[],
  },
  {
    pair: "EUR/USD",
    price: "0",
    change: "0",
    changePercent: "0%",
    volume: "-",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    icon: DollarSign,
    symbol: "EUR",
    history: [] as number[],
  },
  {
    pair: "US30",
    price: "0",
    change: "0",
    changePercent: "0%",
    volume: "-",
    gradient: "linear-gradient(135deg, #10b981, #06d6a0)",
    icon: Globe,
    symbol: "US30",
    history: [] as number[],
  },
];

export const communityStats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Active Members",
    description: "Growing community of dedicated traders",
    gradient: "var(--gradient-blue)",
    delay: 0.2,
    color: "var(--icon-community)",
  },
  {
    icon: Target,
    number: "80%+",
    label: "Verified Win Rate on Forex Signals",
    description: "Proven track record of successful trades",
    gradient: "var(--gradient-green)",
    color: "var(--icon-community)",
    delay: 0.4,
  },
  {
    icon: Globe,
    number: "News Trade",
    label: "Experts",
    description: "Mastering High-Impact Events",
    gradient: "var(--gradient-yellow-orange)",
    color: "var(--icon-community)",
    delay: 0.6,
  },
  {
    icon: Award,
    number: "Hundreds",
    label: "Traders Mentored",
    description: "Successful trading education and guidance",
    gradient: "var(--gradient-pink)",
    color: "var(--icon-community)",
    delay: 0.8,
  },
];

export interface ReelVideo {
  id: string;
  src: string;
  thumbnail?: string;
}
import Vid4 from "../../../public/video-4.jpg";
import Vid3 from "../../../public/video-3.jpg";
import Vid5 from "../../../public/video-5.jpg";
import Vid2 from "../../../public/video-2.jpg";
import Vid1 from "../../../public/video-1.jpg";

export const REELS_VIDEOS: ReelVideo[] = [
  {
    id: 'reel-1',
    thumbnail: Vid1,
    src: 'https://www.instagram.com/reel/DOktGO_jdkN/',
  },
  {
    id: 'reel-2',
    thumbnail: Vid2,
    src: 'https://www.instagram.com/reel/DOfg8LEEsuj/'
  },
  {
    id: 'reel-3',
    thumbnail: Vid3,
    src: 'https://www.instagram.com/reel/DOY_j3uEi5l/'
  },
  {
    id: 'reel-4',
    thumbnail: Vid4,
    src: 'https://www.instagram.com/reel/DOLsR4vDY7G/'
  },
  {
    id: 'reel-5',
    thumbnail: Vid5,
    src: 'https://www.instagram.com/reel/DMKDeiyikuA/'
  },
];

export const DISCORD_LINK = "https://discord.gg/njAcNGpZ5g";
export const YOUTUBE_LINK = "https://youtube.com/@rtctrading";
export const FACEBOOK_LINK = "https://facebook.com/rtctrading";
export const INSTAGRAM_LINK = "https://instagram.com/rtctrading";
export const TIKTOK_LINK = "https://tiktok.com/@rtctrading";

export const HERO_CONTENT: HeroContent = {
  headline: "Master the Markets with Rao Trading Concept (RTC)",
  subtext: "Pakistan's Leading Forex Trading Community – Join our Discord to get access to exclusive content",
  ctaText: "Join Our Discord",
  ctaLink: DISCORD_LINK
};

export const ABOUT_CONTENT: AboutContent = {
  title: "About Rao Umer",
  description: "Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned Forex trader with 6+ years of market experience. He developed RTC by combining ICT, Smart Money Concepts (SMC), and Volume Spread Analysis (VSA) into one complete trading methodology. RTC trains traders to think like institutions, not retail gamblers."
};

export const COMMUNITY_STATS: CommunityStats = {
  members: "10,000+",
  winRate: "80%+",
  newsTradeExperts: true,
  tradersMentored: "Hundreds"
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Contact", href: "#contact" },
  { label: "Services", href: "#services" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];
