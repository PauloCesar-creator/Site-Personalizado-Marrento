import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Shield, Send, Lock } from 'lucide-react';
import { CaseFinish } from '../types';
import logoImg from '../assets/images/logo_marrento_1787233965102.jpg';

interface VipConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFinish?: CaseFinish;
}

export const VipConciergeModal: React.FC<VipConciergeModalProps> = ({
  isOpen,
  onClose,
  selectedFinish
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(
    selectedFinish ? `Acabamento ${selectedFinish.name}` : 'Caixa Personalizada Precision 316L'
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="vip-concierge-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0e0e14] border-2 border-cyan-400 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,163,224,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-cyan-400 p-1"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-zinc-100">
              Solicitação VIP Registrada
            </h3>
            <p className="font-sans-clean text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-cyan-300">{name}</strong>. Nosso especialista de alta relojoaria
              entrará em contato em até 4 horas com o seu dossiê técnico exclusivo.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-cyan-400 bg-cyan-950/50 text-cyan-300 font-mono-tech text-xs tracking-wider uppercase hover:bg-cyan-400 hover:text-zinc-950 transition-all"
              >
                Voltar ao Mostruário
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 p-0.5 bg-black">
                <img
                  src={logoImg}
                  alt="Marrento"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-mono-tech text-[10px] text-cyan-400 uppercase tracking-widest block">
                  Atendimento Private Concierge
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-zinc-100">
                  Reserva & Encomenda Exclusiva
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono-tech text-xs text-zinc-300 uppercase tracking-wider block mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Paulo César Bastos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs font-mono-tech text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono-tech text-xs text-zinc-300 uppercase tracking-wider block mb-1">
                    E-mail Corporativo / Pessoal
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs font-mono-tech text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="font-mono-tech text-xs text-zinc-300 uppercase tracking-wider block mb-1">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+55 (11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs font-mono-tech text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono-tech text-xs text-zinc-300 uppercase tracking-wider block mb-1">
                  Configuração de Interesse
                </label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs font-mono-tech text-cyan-300 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono-tech text-zinc-500 pt-2">
                <Lock className="w-3 h-3 text-cyan-400" />
                <span>Dados sob sigilo estrito e protocolo de privacidade VIP.</span>
              </div>

              <button
                type="submit"
                id="btn-submit-concierge"
                className="w-full py-3 px-4 border border-cyan-400 bg-cyan-950/60 text-cyan-300 font-mono-tech text-xs font-bold tracking-widest uppercase hover:bg-cyan-500 hover:text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-950/60"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirmar Solicitação de Reserva</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
