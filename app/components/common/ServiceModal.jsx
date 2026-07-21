"use client";

import { useState } from "react";
import { X, Clock, Phone, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { companyConfig } from "../../lib/config";
import { BookingForm } from "../forms/BookingForm";

export function ServiceModal({ service, isOpen, onClose }) {
  const [showBooking, setShowBooking] = useState(false);

  if (!service) return null;

  // Reset back to details view whenever the modal is closed
  const handleClose = () => {
    setShowBooking(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-3xl max-h-[90vh] bg-gray-950 border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gray-950 border-b border-[#D4AF37]/30 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  {showBooking && (
                    <button
                      onClick={() => setShowBooking(false)}
                      className="p-2 hover:bg-[#D4AF37]/10 rounded-lg transition text-[#D4AF37]"
                      title="Back"
                    >
                      <ArrowLeft size={22} />
                    </button>
                  )}
                  <h2 className="text-2xl font-bold text-white truncate">
                    {showBooking ? `Book: ${service.title}` : service.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {!showBooking && (
                    <button
                      onClick={() => setShowBooking(true)}
                      className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black text-sm font-semibold transition hover:bg-[#C9A227] hover:scale-105"
                    >
                      Book Now
                    </button>
                  )}
                  
                 <a   href={`tel:${companyConfig.phoneRaw}`}
                    className="p-2 hover:bg-[#D4AF37]/10 rounded-lg transition text-[#D4AF37] flex items-center gap-2 text-sm font-semibold hover:scale-105"
                    title="Call Now"
                  >
                    <Phone size={20} />
                    <span className="hidden sm:inline">Call Now</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-[#D4AF37]/10 rounded-lg transition text-[#D4AF37]"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {showBooking ? (
                  /* Booking form view — service pre-selected */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                   <BookingForm defaultService={service.title} onSuccess={handleClose} />
                  </motion.div>
                ) : (
                  <>
                    {/* Single image */}
                    {service.image && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative aspect-[3/2] w-full rounded-lg overflow-hidden border border-[#D4AF37]/20 bg-black"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.currentTarget.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='18' fill='%23888' text-anchor='middle' dy='.3em'%3EImage not available%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">About This Service</h3>
                      <p className="text-gray-300 leading-relaxed">{service.details}</p>
                    </motion.div>

                    {/* Duration */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 flex items-center gap-3"
                    >
                      <Clock size={24} className="text-[#D4AF37] flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#D4AF37]">Duration</h4>
                        <p className="text-gray-300">{service.duration}</p>
                      </div>
                    </motion.div>

                    {/* Process Steps */}
                    {service.process && service.process.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">How We Work on This Service</h3>
                        <div className="space-y-3">
                          {service.process.map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              className="bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-4 hover:border-[#D4AF37]/50 transition"
                            >
                              <div className="flex gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] font-semibold flex-shrink-0 mt-1">
                                  {step.step}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-white">{step.title}</h4>
                                  <p className="text-sm text-gray-400 mt-1">{step.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}