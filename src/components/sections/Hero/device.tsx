"use client";

import React from 'react';

const Device = ({ laptopPoster, laptopWebm, laptopMp4, laptopFrameImg, iphonePoster, iphoneWebm, iphoneMp4, iphoneFrameImg }: { laptopPoster: string, laptopWebm: string, laptopMp4: string, laptopFrameImg: string, iphonePoster: string, iphoneWebm: string, iphoneMp4: string, iphoneFrameImg: string }) => {
    return (
        <div className="nh-hero-devices">
            <div className="nh-hero-device-frames">
                <div className="nh-hero-laptop">
                    <div className="video-rewind-browse-mac w-embed">
                        <video id="hero-laptop" playsInline poster={laptopPoster} muted autoPlay style={{ display: 'block', width: '100%', height: 'auto' }}>
                            <source id="hero-laptop-webm" src={laptopWebm} type="video/webm" />
                            <source id="hero-laptop-mp4" src={laptopMp4} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <img src={laptopFrameImg} loading="eager" sizes="95vw" alt="" className="laptop-frame-img" />
                </div>
                <div className="nh-hero-phone">
                    <div className="video-rewind-iphone w-embed">
                        <video id="hero-iphone" playsInline muted autoPlay poster={iphonePoster} style={{ display: 'block', width: '100%', height: 'auto' }}>
                            <source id="hero-iphone-webm" src={iphoneWebm} type="video/webm" />
                            <source id="hero-iphone-mp4" src={iphoneMp4} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <img src={iphoneFrameImg} loading="eager" sizes="250px" alt="" className="iphone-frame-img" />
                </div>
            </div>
        </div>
    );
};

export default Device;
