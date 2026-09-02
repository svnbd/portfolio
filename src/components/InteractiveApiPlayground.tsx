import React, { useState } from 'react';
import { API_DEMOS } from '../data/portfolioData';
import { ApiEndpointDemo } from '../types';
import { 
  Terminal, 
  Play, 
  ShieldCheck, 
  Check, 
  Copy, 
  Clock, 
  Key, 
  Send, 
  AlertTriangle,
  Lock,
  Layers,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveApiPlayground: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<ApiEndpointDemo>(API_DEMOS[0]);
  const [simulateMalicious, setSimulateMalicious] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseOutput, setResponseOutput] = useState<any>(API_DEMOS[0].responseBody);
  const [responseStatus, setResponseStatus] = useState<number>(API_DEMOS[0].responseStatus);
  const [copiedResponse, setCopiedResponse] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(32);

  const handleSelectEndpoint = (demo: ApiEndpointDemo) => {
    setSelectedDemo(demo);
    setSimulateMalicious(false);
    setResponseOutput(demo.responseBody);
    setResponseStatus(demo.responseStatus);
    setLatency(Math.floor(Math.random() * 25) + 20);
  };

  const handleExecuteRequest = () => {
    setIsLoading(true);
    const executionTime = Math.floor(Math.random() * 28) + 18;
    setLatency(executionTime);

    setTimeout(() => {
      setIsLoading(false);

      if (simulateMalicious) {
        setResponseStatus(403);
        setResponseOutput({
          error: 'Forbidden_Security_Violation',
          message: 'Zero-Trust Shield: Request payload contains invalid signature or malicious token sequence.',
          threat_mitigation: {
            firewall_action: 'DROPPED_AND_LOGGED',
            ip_recorded: '203.0.113.42',
            owasp_rule: 'OWASP-A01-Broken-Access-Control'
          },
          status: 'blocked'
        });
      } else {
        setResponseStatus(selectedDemo.responseStatus);
        setResponseOutput(selectedDemo.responseBody);
        
        // Minor celebration if testing payment or threat scan
        if (selectedDemo.id === 'payment-webhook' || selectedDemo.id === 'security-threat-scan') {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.7 }
          });
        }
      }
    }, 450);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

  const getMethodBadgeColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'POST': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'PUT': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'DELETE': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      default: return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <section id="api-playground" className="py-24 bg-[#0b0f19] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            REST API & Web Security Testing Playground
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
            Test real-world API architectural patterns built by Md Shovon in Laravel and Node.js. Inspect headers, rate-limiting, and security mitigations in real time.
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
          
          {/* Left Column: Endpoints Menu */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Select API Endpoint
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                {API_DEMOS.length} Endpoints
              </span>
            </div>

            <div className="space-y-2">
              {API_DEMOS.map((demo) => {
                const isSelected = selectedDemo.id === demo.id;
                return (
                  <button
                    key={demo.id}
                    id={`api-select-${demo.id}`}
                    onClick={() => handleSelectEndpoint(demo)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-2 ${
                      isSelected
                        ? 'bg-slate-800/90 border-emerald-500/50 shadow-md shadow-emerald-950/20'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getMethodBadgeColor(demo.method)}`}>
                        {demo.method}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {demo.category}
                      </span>
                    </div>

                    <div className="font-bold text-xs sm:text-sm text-slate-200">
                      {demo.title}
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 truncate">
                      {demo.path}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Attack Simulation Toggle Box */}
            <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800 mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    Simulate Tampered Signature / Attack
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={simulateMalicious}
                    onChange={(e) => setSimulateMalicious(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
                </label>
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Toggle to test how Md Shovon's Zero-Trust API middleware halts invalid signatures or injection payloads.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Console & Response View */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            
            {/* Request Bar */}
            <div className="p-3 bg-[#0a0e17] rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-[200px] overflow-hidden">
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${getMethodBadgeColor(selectedDemo.method)}`}>
                  {selectedDemo.method}
                </span>
                <span className="font-mono text-xs sm:text-sm text-slate-100 truncate">
                  {selectedDemo.path}
                </span>
              </div>

              <button
                id="api-send-request-btn"
                onClick={handleExecuteRequest}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-semibold text-xs transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50 active:scale-95"
              >
                {isLoading ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                <span>{isLoading ? 'Executing...' : 'Send Request'}</span>
              </button>
            </div>

            {/* Security Implementation Badge */}
            <div className="px-4 py-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-300">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-200">Security Architecture:</strong>{' '}
                {selectedDemo.securityFeature}
              </div>
            </div>

            {/* Request Payload / Headers (if POST) */}
            {selectedDemo.requestBody && (
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Request Payload (JSON)</span>
                  <span className="text-[10px] text-slate-400">Content-Type: application/json</span>
                </div>
                <div className="bg-[#070a12] p-3 rounded-lg border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{JSON.stringify(selectedDemo.requestBody, null, 2)}</pre>
                </div>
              </div>
            )}

            {/* Response Section */}
            <div className="flex-1 flex flex-col space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 uppercase tracking-wider font-semibold">Response:</span>
                  <span className={`px-2 py-0.5 rounded font-bold ${
                    responseStatus === 200 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : responseStatus === 422 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  }`}>
                    {responseStatus} {responseStatus === 200 ? 'OK' : responseStatus === 422 ? 'Unprocessable Entity' : 'Forbidden'}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {latency}ms
                  </span>
                </div>

                <button
                  onClick={handleCopyResponse}
                  className="text-slate-400 hover:text-slate-200 flex items-center gap-1 text-[11px]"
                  title="Copy Response JSON"
                >
                  {copiedResponse ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedResponse ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* JSON Response View */}
              <div className="bg-[#070a12] p-4 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto text-slate-200 flex-1 min-h-[180px]">
                {isLoading ? (
                  <div className="h-full flex flex-col items-center justify-center py-8 text-slate-400 gap-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
                    <span className="text-xs">Processing Request via Laravel/Node Pipeline...</span>
                  </div>
                ) : (
                  <pre className="text-emerald-400/90 leading-relaxed">
                    {JSON.stringify(responseOutput, null, 2)}
                  </pre>
                )}
              </div>

              {/* Response Headers */}
              <div className="text-[11px] font-mono text-slate-400 pt-1 flex flex-wrap gap-x-4 gap-y-1">
                <span><strong>Server:</strong> Nginx / PHP-FPM / Node.js</span>
                <span><strong>HSTS:</strong> max-age=31536000</span>
                <span><strong>RateLimit:</strong> 60/min</span>
                <span><strong>Protection:</strong> XSS-Sanitized</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
