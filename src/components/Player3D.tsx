'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';
import { musicList, Music, getNextMusic, getPreviousMusic } from '@/lib/musicList';

const Player3D: React.FC = () => {
    const [currentMusic, setCurrentMusic] = useState<Music>(musicList[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleNext = useCallback(() => {
    const nextMusic = getNextMusic(currentMusic.id);
    setCurrentMusic(nextMusic);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [currentMusic.id]);

  const handlePrevious = useCallback(() => {
    const prevMusic = getPreviousMusic(currentMusic.id);
    setCurrentMusic(prevMusic);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [currentMusic.id]);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      handleNext();
    };
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentMusic, handleNext]);

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;

        const newVolume = parseFloat(e.target.value);
        audio.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isMuted) {
            audio.volume = volume;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="music-player rounded-3xl p-8 depth-3d"
            >
                {/* Capa do álbum 3D */}
                <motion.div
                    className="relative mb-8 mx-auto w-64 h-64"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <motion.div
                        className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                        animate={{
                            rotateY: isPlaying ? 360 : 0,
                            boxShadow: isPlaying
                                ? "0 0 40px rgba(255, 255, 255, 0.3)"
                                : "0 0 20px rgba(255, 255, 255, 0.1)"
                        }}
                        transition={{
                            rotateY: { duration: 20, repeat: isPlaying ? Infinity : 0, ease: "linear" },
                            boxShadow: { duration: 0.3 }
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
            <Image
              src={currentMusic.cover}
              alt={`Capa do álbum - ${currentMusic.title}`}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='16'%3E🎵%3C/text%3E%3C/svg%3E";
              }}
            />
                    </motion.div>

                    {/* Efeito de brilho */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        animate={{
                            background: isPlaying
                                ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"
                                : "transparent"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Informações da música */}
                <motion.div
                    className="text-center mb-8"
                    key={currentMusic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-2 gradient-text">
                        {currentMusic.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {currentMusic.artist}
                    </p>
                </motion.div>

                {/* Barra de progresso */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleSeek}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer progress-bar"
                            style={{
                                background: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) ${(currentTime / duration) * 100}%, rgba(255,255,255,0.1) 100%)`
                            }}
                        />
                    </div>
                </div>

                {/* Controles principais */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrevious}
                        className="p-3 rounded-full glass hover-glow transition-all duration-300"
                    >
                        <SkipBack size={24} className="text-white" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlayPause}
                        className="p-4 rounded-full glass hover-glow transition-all duration-300 relative"
                        disabled={isLoading}
                    >
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                                />
                            ) : (
                                <motion.div
                                    key="icon"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                >
                                    {isPlaying ? (
                                        <Pause size={32} className="text-white" />
                                    ) : (
                                        <Play size={32} className="text-white ml-1" />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNext}
                        className="p-3 rounded-full glass hover-glow transition-all duration-300"
                    >
                        <SkipForward size={24} className="text-white" />
                    </motion.button>
                </div>

                {/* Controle de volume */}
                <div className="flex items-center space-x-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMute}
                        className="p-2 rounded-full glass hover-glow transition-all duration-300"
                    >
                        {isMuted ? (
                            <VolumeX size={20} className="text-white" />
                        ) : (
                            <Volume2 size={20} className="text-white" />
                        )}
                    </motion.button>

                    <div className="flex-1">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.3) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) 100%)`
                            }}
                        />
                    </div>
                </div>

                {/* Áudio element */}
                <audio
                    ref={audioRef}
                    src={currentMusic.src}
                    preload="metadata"
                />
            </motion.div>
        </div>
    );
};

export default Player3D;
