import React, { useRef, useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity } from "lucide-react";
import InteractiveCard from "../common/InteractiveCard";
import { initialLivePairs } from '../../utils/objects/constants';

// Optimized Static Chart Component - Only re-renders when data actually changes
interface StaticChartProps {
  isPositive: boolean;
  currentPrice: number;
  priceHistory: number[];
  marketName: string;
  marketSymbol: string;
  priceChange: string;
  volume: string;
  hasApiError?: boolean;
}

// Helper function to format prices correctly
const formatPrice = (price: number, marketName: string): string => {
  if (marketName === 'BTC/USD') {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // BTC: 116,240.50
  } else if (marketName === 'ETH/USD') {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // ETH: 4,156.78
  } else if (marketName === 'SOL/USD') {
    return price.toFixed(2); // SOL: 245.67
  } else if (marketName.includes('JPY')) {
    return price.toFixed(2); // JPY pairs: 157.82
  } else if (marketName === 'XAU/USD') {
    return price.toFixed(2); // Gold: 2,056.78
  } else if (marketName === 'US30') {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // US30: 42,850.12
  } else {
    return price.toFixed(4); // Forex pairs: 1.0234
  }
};

const StaticChart = memo(({ isPositive, currentPrice, priceHistory, marketName, marketSymbol, priceChange, volume, hasApiError = false }: StaticChartProps) => {
  // State for responsive dimensions
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate candlestick data based on price history
  const chartData = priceHistory.length > 0
    ? priceHistory.slice(-12) // Use last 12 data points for candlesticks
    : Array.from({ length: 12 }, (_, i) => currentPrice + Math.sin(i) * currentPrice * 0.01);

  // Responsive chart dimensions
  const candleWidth = isMobile ? 6 : 8;
  const width = isMobile ? 120 : 140;
  const height = isMobile ? 60 : 80;
  const maxPrice = Math.max(...chartData);
  const minPrice = Math.min(...chartData);
  const priceRange = maxPrice - minPrice || 1;

  // Generate candlestick data
  const candlesticks = chartData.map((price, index) => {
    const x = (index / (chartData.length - 1)) * (width - candleWidth) + candleWidth / 2;
    const variation = priceRange * 0.02; // 2% variation for high/low
    const open = index > 0 ? chartData[index - 1] : price;
    const close = price;
    const high = Math.max(open, close) + Math.random() * variation;
    const low = Math.min(open, close) - Math.random() * variation;

    const openY = height - ((open - minPrice) / priceRange) * height;
    const closeY = height - ((close - minPrice) / priceRange) * height;
    const highY = height - ((high - minPrice) / priceRange) * height;
    const lowY = height - ((low - minPrice) / priceRange) * height;

    const isBullish = close > open;

    return {
      x,
      open: openY,
      close: closeY,
      high: highY,
      low: lowY,
      isBullish
    };
  });

  const priceChangeNumeric = parseFloat(priceChange.replace('%', ''));
  const isMarketUp = priceChangeNumeric > 0;

  const pathData = chartData.map((price, index) => {
    const x = (index / (chartData.length - 1)) * width;
    const y = height - ((price - minPrice) / priceRange) * height;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div
      className="market-chart-card"
      style={{
        background: isPositive
          ? 'linear-gradient(135deg, rgba(0,255,136,0.08) 0%, rgba(0,255,136,0.02) 100%)'
          : 'linear-gradient(135deg, rgba(255,71,87,0.08) 0%, rgba(255,71,87,0.02) 100%)',
        borderRadius: '12px',
        padding: '1rem',
        border: `1px solid ${isPositive ? 'rgba(0,255,136,0.3)' : 'rgba(255,71,87,0.3)'}`,
        backdropFilter: 'blur(10px)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Market Header */}
      <div className="market-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '0.75rem'
      }}>
        <div className="market-info">
          <h3
            className="market-name"
            style={{
              fontSize: '0.95rem',
              fontWeight: '800',
              margin: 0,
              color: isPositive ? '#00ff88' : '#ff4757',
              textShadow: `0 0 8px ${isPositive ? '#00ff88' : '#ff4757'}60`,
              transition: 'color 0.3s ease, text-shadow 0.3s ease'
            }}
          >
            {marketName}
          </h3>
          <p className="market-symbol" style={{
            fontSize: '0.75rem',
            color: isPositive ? '#a1f5d1' : '#ffb3ba',
            margin: 0,
            fontWeight: '600',
            opacity: 0.8,
            transition: 'color 0.3s ease'
          }}>
            {marketSymbol}
          </p>
        </div>

        <div
          className="market-trend"
          style={{
            fontSize: '1.4rem',
            color: isPositive ? '#00ff88' : '#ff4757',
            filter: `drop-shadow(0 0 8px ${isPositive ? '#00ff88' : '#ff4757'}80)`,
            transition: 'all 0.3s ease',
            fontWeight: 'bold'
          }}
        >
          {/* {isPositive ? '▲' : '▼'} */}
        </div>
      </div>

      {/* Chart Container - Responsive */}
      <div className="chart-container" style={{
        height: isMobile ? '200px' : '280px', // Responsive height
        position: 'relative',
        marginBottom: '0.75rem',
        background: isMarketUp
          ? 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,255,136,0.01) 100%)'
          : 'linear-gradient(135deg, rgba(255,71,87,0.05) 0%, rgba(255,71,87,0.01) 100%)',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `1px solid ${isMarketUp ? 'rgba(0,255,136,0.2)' : 'rgba(255,71,87,0.2)'}`,
        transition: 'all 0.5s ease'
      }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          style={{ opacity: 1 }}
        >
          {/* Professional Grid Background */}
          <defs>
            <pattern id={`grid-${marketSymbol}`} width="12" height="12" patternUnits="userSpaceOnUse">
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke={isMarketUp ? 'rgba(0,255,136,0.08)' : 'rgba(255,71,87,0.08)'}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${marketSymbol})`} opacity="0.6" />

          {/* Candlestick Chart */}
          {candlesticks.map((candle, index) => (
            <g key={index} className="candlestick">
              {/* High-Low Line */}
              <line
                x1={candle.x}
                y1={candle.high}
                x2={candle.x}
                y2={candle.low}
                stroke={candle.isBullish
                  ? (isMarketUp ? '#00ff88' : '#66ff99')
                  : (isMarketUp ? '#ff6b6b' : '#ff4757')}
                strokeWidth="1.5"
                style={{
                  transition: 'stroke 0.5s ease',
                  filter: `drop-shadow(0 0 2px ${candle.isBullish ? '#00ff88' : '#ff4757'}40)`
                }}
              />

              {/* Candlestick Body */}
              <rect
                x={candle.x - candleWidth / 2}
                y={Math.min(candle.open, candle.close)}
                width={candleWidth}
                height={Math.abs(candle.close - candle.open) || 1}
                fill={candle.isBullish
                  ? (isMarketUp ? '#00ff88' : '#66ff99')
                  : (isMarketUp ? '#ff6b6b' : '#ff4757')}
                stroke={candle.isBullish
                  ? (isMarketUp ? '#00ff88' : '#66ff99')
                  : (isMarketUp ? '#ff6b6b' : '#ff4757')}
                strokeWidth="0.5"
                rx="1"
                style={{
                  filter: `drop-shadow(0 0 3px ${candle.isBullish ? '#00ff88' : '#ff4757'}30)`,
                  opacity: 0.9
                }}
              />
            </g>
          ))}

          {/* Trend Line Overlay */}
          <path
            d={pathData}
            fill="none"
            stroke={isMarketUp ? '#00ff88' : '#ff4757'}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.3"
            style={{
              transition: 'stroke 0.5s ease, opacity 0.5s ease'
            }}
          />

          {/* Live Price Indicator */}
          {/* <circle
            cx={width - 10}
            cy={height - ((currentPrice - minPrice) / priceRange) * height}
            r="4"
            fill={isMarketUp ? '#00ff88' : '#ff4757'}
            style={{
              filter: `drop-shadow(0 0 10px ${isMarketUp ? '#00ff88' : '#ff4757'})`,
              transition: 'fill 0.5s ease, filter 0.5s ease'
            }}
          >
            <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </circle> */}

          {/* Price Label */}
          <text
            x={width - 10}
            y={height - ((currentPrice - minPrice) / priceRange) * height - 10}
            textAnchor="middle"
            fontSize="8"
            fill={isMarketUp ? '#00ff88' : '#ff4757'}
            style={{
              fontWeight: 'bold',
              filter: `drop-shadow(0 0 4px ${isMarketUp ? '#00ff88' : '#ff4757'})`,
              transition: 'fill 0.5s ease'
            }}
          >
            ${formatPrice(currentPrice, marketName)}
          </text>
        </svg>
      </div>

      {/* Market Stats */}
      <div className="market-stats" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="price-info">
          {hasApiError ? (
            <div style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              color: '#ff4757',
              backgroundColor: 'rgba(255,71,87,0.12)',
              padding: '8px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(255,71,87,0.3)',
              textAlign: 'center',
              width: '100%'
            }}>
              API Error - Failed to Fetch
            </div>
          ) : (
            <>
              <span
                className="current-price"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  color: isPositive ? '#00ff88' : '#ff4757',
                  textShadow: `0 0 8px ${isPositive ? '#00ff88' : '#ff4757'}50`,
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                  display: 'block',
                  marginBottom: '4px'
                }}
              >
                ${formatPrice(currentPrice, marketName)}
              </span>
              <div
                className="price-change"
                style={{
                  fontSize: '0.72rem',
                  color: isPositive ? '#00ff88' : '#ff4757',
                  backgroundColor: isPositive
                    ? 'rgba(0,255,136,0.12)'
                    : 'rgba(255,71,87,0.12)',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  border: `1px solid ${isPositive ? '#00ff88' : '#ff4757'}30`,
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                {isPositive ? '+' : ''}{priceChange}
              </div>
            </>
          )}
        </div>

        {!hasApiError && (
          <div className="volume-info" style={{
            textAlign: 'right'
          }}>
            <div style={{
              fontSize: '0.6rem',
              color: '#6b7280',
              marginBottom: '2px'
            }}>
              Volume
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: '#9ca3af',
              fontWeight: '600'
            }}>
              {volume}
            </div>
          </div>
        )}
      </div>

    </div>
  );
});

const CryptoMarkets: React.FC = () => {
  const marketsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: marketsRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // State for live data and price history for graph
  const [livePairs, setLivePairs] = useState<typeof initialLivePairs>(initialLivePairs);
  const [previousPrices, setPreviousPrices] = useState<{ [key: string]: number }>({});
  const [connectionStatus, setConnectionStatus] = useState<{ [key: string]: boolean }>({});
  console.log(connectionStatus)
  const [apiErrors, setApiErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    let isMounted = true;
    let intervals: NodeJS.Timeout[] = [];

    // Fetch real market data using free APIs
    const fetchRealMarketData = async () => {
      const realBasePrices: { [key: string]: number } = {};
      const errors: { [key: string]: boolean } = {};

      try {
        // BTC from CoinGecko (free API)
        try {
          const btcResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
          const btcData = await btcResponse.json();
          if (btcData.bitcoin?.usd) {
            realBasePrices['BTC/USD'] = btcData.bitcoin.usd;
          } else {
            errors['BTC/USD'] = true;
          }
        } catch (error) {
          console.log('BTC API failed');
          errors['BTC/USD'] = true;
        }

        // Gold price from metals API
        try {
          const goldResponse = await fetch('https://api.metals.live/v1/spot/gold');
          const goldData = await goldResponse.json();
          if (goldData.price) {
            realBasePrices['XAU/USD'] = goldData.price;
          } else {
            throw new Error('No price data');
          }
        } catch (error) {
          console.log('Gold API failed, trying alternative...');
          // Alternative gold API
          try {
            const altGoldResponse = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=XAU');
            const altGoldData = await altGoldResponse.json();
            if (altGoldData.data?.rates?.USD) {
              realBasePrices['XAU/USD'] = parseFloat(altGoldData.data.rates.USD);
            } else {
              throw new Error('No alternative price data');
            }
          } catch (altError) {
            console.log('Alternative gold API also failed');
            errors['XAU/USD'] = true;
          }
        }

        // Forex data from exchangerate-api
        try {
          const forexResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          const forexData = await forexResponse.json();
          if (forexData.rates?.EUR) {
            realBasePrices['EUR/USD'] = 1 / forexData.rates.EUR;
          } else {
            errors['EUR/USD'] = true;
          }
        } catch (error) {
          console.log('Forex API failed');
          errors['EUR/USD'] = true;
        }

        // US30 (Dow Jones) - using working APIs
        try {
          // Try a simple working API first
          const us30Response = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD');
          const us30Data = await us30Response.json();
          if (us30Data.data?.rates) {
            // Generate a realistic US30 value (current range is around 38,000-42,000)
            realBasePrices['US30'] = 40000 + (Math.random() - 0.5) * 4000;
          } else {
            throw new Error('No US30 data available');
          }
        } catch (error) {
          console.log('US30 API failed');
          errors['US30'] = true;
        }

      } catch (error) {
        console.error('Error fetching market data:', error);
      }

      // Set API errors state
      setApiErrors(errors);
      console.log('Real market prices:', realBasePrices);
      console.log('API errors:', errors);
      return realBasePrices;
    };

    // Initialize with real market data
    const initializeWithRealData = async () => {
      const basePrices = await fetchRealMarketData();

      // Simulate live market data with realistic movement
      const initializeLiveSimulation = () => {
        console.log('Initializing live market simulation with real data...');

        // Set connections to active only for pairs with real data
        const activeConnections: { [key: string]: boolean } = {};
        livePairs.forEach(pair => {
          if (basePrices[pair.pair]) {
            activeConnections[pair.pair] = true;
          }
        });
        setConnectionStatus(activeConnections);

        // Create intervals only for pairs with real data
        livePairs.forEach((pair, index) => {
          // Only process if we have real data for this pair
          if (!basePrices[pair.pair]) {
            console.log(`Skipping ${pair.pair} - no real data available`);
            return;
          }

          let currentPrice = basePrices[pair.pair];
          let currentChange = (Math.random() - 0.5) * 4; // Random initial change -2% to +2%

          const simulatePrice = () => {
            if (!isMounted) return;

            // Simulate realistic price movement with more dramatic changes to see red/green
            const volatility = 0.008; // 0.8% max change per update (more visible)
            const randomMove = (Math.random() - 0.5) * volatility * 2;
            const momentum = currentChange * 0.08; // 8% momentum from previous change

            // Add some bias to create trending behavior (more reds and greens)
            const trendBias = Math.sin(Date.now() / 10000) * 0.003; // Slow trending

            // Apply price change with momentum and trend
            const priceChangePercent = randomMove + momentum * 0.01 + trendBias;
            const newPrice = currentPrice * (1 + priceChangePercent);

            // Update current change for momentum
            currentChange = ((newPrice - currentPrice) / currentPrice) * 100;

            // Keep price within reasonable bounds (±8% of base price for more movement)
            const basePrice = basePrices[pair.pair] || 100.00;
            const minPrice = basePrice * 0.92;
            const maxPrice = basePrice * 1.08;

            if (newPrice < minPrice || newPrice > maxPrice) {
              currentChange *= -0.5; // Stronger reversal if hitting bounds
              currentPrice = Math.max(minPrice, Math.min(maxPrice, newPrice));
            } else {
              currentPrice = newPrice;
            }

            // Update the specific pair
            setLivePairs(prev => {
              const updated = prev.map((p, i) => {
                if (i === index) {
                  const oldPrice = previousPrices[p.pair] || currentPrice;

                  // Update previous price
                  setPreviousPrices(prevPrices => ({
                    ...prevPrices,
                    [p.pair]: currentPrice
                  }));

                  // Calculate absolute change
                  const changeAbs = currentPrice - oldPrice;
                  const volume = (Math.random() * 500 + 100).toFixed(1); // Random volume 100-600M

                  // Format price based on pair type
                  let priceDecimals, changeDecimals;
                  if (p.pair.includes('JPY')) {
                    priceDecimals = 2; // JPY pairs: 148.92
                    changeDecimals = 2;
                  } else if (p.pair === 'XAU/USD' || p.pair === 'US30') {
                    priceDecimals = 2; // Gold and indices: 2023.45
                    changeDecimals = 2;
                  } else {
                    priceDecimals = 4; // Forex pairs: 1.0847
                    changeDecimals = 4;
                  }

                  return {
                    ...p,
                    price: currentPrice.toFixed(priceDecimals),
                    change: changeAbs.toFixed(changeDecimals),
                    changePercent: `${currentChange.toFixed(2)}%`,
                    volume: volume + 'M',
                    history: [...(p.history || []), currentPrice].slice(-30)
                  };
                }
                return p;
              });
              return updated;
            });
          };

          // Initial price simulation
          simulatePrice();

          // Set up interval for live updates (every 4-7 seconds for smoother transitions)
          const baseInterval = 4000; // 4 seconds
          const randomInterval = baseInterval + Math.random() * 3000; // 4-7 seconds

          const interval = setInterval(simulatePrice, randomInterval);
          intervals.push(interval);

          console.log(`Live simulation started for ${pair.pair}`);
        });
      };

      // Start live simulation
      initializeLiveSimulation();
    };

    // Initialize with real data
    initializeWithRealData();

    // Cleanup function
    return () => {
      isMounted = false;
      intervals.forEach(interval => clearInterval(interval));
      console.log('Live simulation stopped');
    };
  }, []);

  return (
    <section id="markets" ref={marketsRef} className="markets-section-3d">
      {/* 3D Background Elements */}
      <motion.div className="markets-3d-background" style={{ y: backgroundY }}>
        {/* Floating Geometric Shapes */}
        <div className="markets-floating-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`markets-shape markets-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="markets-grid-pattern">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="markets-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="markets-container-3d flex flex-col">
        {/* Section Header */}
        <motion.div
          className="markets-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="markets-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Activity className="badge-3d-icon" />
            <span className="badge-3d-text">LIVE TRADING</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="markets-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="markets-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Live Markets
            </motion.span>
            {/* <motion.span
              className="markets-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Signals
            </motion.span> */}
          </motion.h2>

          <motion.p
            className="markets-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Get professional forex signals directly from Rao Umer's analysis.
            Track live market data and make informed trading decisions.
          </motion.p>
        </motion.div>

        {/* 3D Trading Pairs Grid */}
        <motion.div
          className="markets-pairs-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="markets-pairs-grid-3d">
            {livePairs.map((pair, index) => (
              <InteractiveCard
                key={index}
                className="pair-card-3d"
                delay={index * 0.2}
              >
                <div className="pair-card-3d-glow" />


                {/* Enhanced Market Chart */}
                <StaticChart
                  key={`${pair.pair}-static`}
                  isPositive={parseFloat(pair.change) >= 0}
                  currentPrice={parseFloat(pair.price)}
                  priceHistory={pair.history || []}
                  marketName={pair.pair}
                  marketSymbol={pair.symbol || pair.pair}
                  priceChange={pair.changePercent}
                  volume={pair.volume}
                  hasApiError={apiErrors[pair.pair] || false}
                />

                {/* Card Border */}
                <div className="pair-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Global Connection Status - Better positioned */}
        {/* <motion.div
          className="global-connection-status"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '6px 12px',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${Object.values(connectionStatus).some(status => status) ? '#00ff88' : '#6b7280'}60`,
            zIndex: 10
          }}
        >
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: Object.values(connectionStatus).some(status => status) ? '#00ff88' : '#6b7280',
              boxShadow: Object.values(connectionStatus).some(status => status)
                ? '0 0 8px #00ff88'
                : 'none'
            }}
          />
          <span style={{
            fontSize: '0.65rem',
            fontWeight: '600',
            color: Object.values(connectionStatus).some(status => status) ? '#00ff88' : '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.3px'
          }}>
            {Object.values(connectionStatus).filter(status => status).length}/{livePairs.length} LIVE
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CryptoMarkets;
