import React, { useState } from 'react';
import { 
  CheckCircle2, GraduationCap, X, Award, ShieldCheck, 
  Sparkles, FileText, Send, AlertCircle, ArrowRight
} from 'lucide-react';
import { User, SwapRequest } from '../types';

interface MarkAsDoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (note: string) => void;
  skillName: string;
  mentor: User;
  swapRequest: SwapRequest;
}

export const MarkAsDoneModal: React.FC<MarkAsDoneModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  skillName,
  mentor,
  swapRequest
}) => {
  const [note, setNote] = useState('');
  const [attendedSessions, setAttendedSessions] = useState(true);
  const [practicedConcepts, setPracticedConcepts] = useState(true);
  const [readyForReview, setReadyForReview] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      onSubmit(note.trim());
      setSubmitting(false);
      onClose();
    }, 400);
  };

  const isReady = attendedSessions && practicedConcepts && readyForReview;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with graduation theme */}
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0 shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-[10px] font-bold text-indigo-200 uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Learner Completion Check
              </div>
              <h2 className="text-xl font-black font-serif tracking-tight">Mark Skill as Done</h2>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Ready to complete your learning? Submit this to your mentor <strong className="text-white">{mentor.name}</strong> for verification.
          </p>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Skill & Mentor Summary Pill */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Skill Learned</span>
              <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                1-on-1 Exchange
              </span>
            </div>
            <div className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>{skillName}</span>
            </div>
            <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1 border-t border-slate-200/60">
              <span>Verified Mentor:</span>
              <strong className="text-slate-900 font-bold">{mentor.name}</strong>
              <span className="text-[10px] text-slate-400">({mentor.city})</span>
            </div>
          </div>

          {/* Verification Process Notice */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 space-y-1.5 text-xs text-amber-900">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>How Mentor Verification Works:</span>
            </div>
            <ul className="text-[11px] text-amber-800 space-y-1 pl-6 list-disc">
              <li>An interactive verification card will appear in your chat with <strong>{mentor.name}</strong>.</li>
              <li>Your mentor will review if the core competencies have been taught and achieved.</li>
              <li>Once verified by your mentor, your official verified certificate unlocks and deposit is refunded!</li>
            </ul>
          </div>

          {/* Self-Assessment Checkboxes */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              Learner Self-Checklist
            </label>
            <div className="space-y-2 text-xs text-slate-700">
              <label className="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={attendedSessions} 
                  onChange={(e) => setAttendedSessions(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                />
                <span>I attended and actively participated in the skill swap sessions with {mentor.name}.</span>
              </label>

              <label className="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={practicedConcepts} 
                  onChange={(e) => setPracticedConcepts(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                />
                <span>I practiced and feel confident with the core techniques learned in {skillName}.</span>
              </label>

              <label className="flex items-start gap-2.5 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input 
                  type="checkbox" 
                  checked={readyForReview} 
                  onChange={(e) => setReadyForReview(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" 
                />
                <span>I am ready for {mentor.name} to check and verify my completion.</span>
              </label>
            </div>
          </div>

          {/* Optional Note / Proof for Mentor */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
              <span>Note or Proof for Mentor (Optional)</span>
              <span className="text-[10px] text-slate-400 font-normal">Project link, summary, or thoughts</span>
            </label>
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={`e.g. "Hi ${mentor.name}, I practiced all the chord changes and can play 3 songs cleanly. Thank you for the guidance!"`}
              className="w-full bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 rounded-xl p-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-all resize-none font-medium"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isReady || submitting}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{submitting ? 'Sending Request...' : 'Send to Mentor for Checking'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
