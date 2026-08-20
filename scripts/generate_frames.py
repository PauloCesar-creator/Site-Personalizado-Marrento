import subprocess
import os
import glob

# Identify stage images
case_img = glob.glob('src/assets/images/watch_stage_case_*.jpg')[0]
back_img = glob.glob('src/assets/images/watch_stage_back_*.jpg')[0]
dial_img = glob.glob('src/assets/images/watch_stage_dial_*.jpg')[0]
bezel_img = glob.glob('src/assets/images/watch_stage_bezel_*.jpg')[0]
hero_img = glob.glob('src/assets/images/watch_stage_hero_*.jpg')[0]

print("Found stages:")
print("1:", case_img)
print("2:", back_img)
print("3:", dial_img)
print("4:", bezel_img)
print("5:", hero_img)

os.makedirs('public/Frames', exist_ok=True)

# Build a smooth 60fps video with ffmpeg using xfade and zoompan filters across the 5 stages
# Total frames desired: 200 frames. At 30fps -> 6.66 seconds or at 60fps -> 3.33 seconds
# Each segment transition lasts smoothly.

filter_complex = f"""
[0:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0008,1.15)':d=50:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,setpts=PTS-STARTPTS[v0];
[1:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0008,1.15)':d=50:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,setpts=PTS-STARTPTS[v1];
[2:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0008,1.15)':d=50:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,setpts=PTS-STARTPTS[v2];
[3:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0008,1.15)':d=50:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,setpts=PTS-STARTPTS[v3];
[4:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0008,1.15)':d=60:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720,setpts=PTS-STARTPTS[v4];
[v0][v1]xfade=transition=fade:duration=0.5:offset=1.2[x1];
[x1][v2]xfade=transition=fade:duration=0.5:offset=2.5[x2];
[x2][v3]xfade=transition=fade:duration=0.5:offset=3.8[x3];
[x3][v4]xfade=transition=fade:duration=0.6:offset=5.0[vfinal]
"""

cmd = [
    'ffmpeg', '-y',
    '-loop', '1', '-t', '2', '-i', case_img,
    '-loop', '1', '-t', '2', '-i', back_img,
    '-loop', '1', '-t', '2', '-i', dial_img,
    '-loop', '1', '-t', '2', '-i', bezel_img,
    '-loop', '1', '-t', '2.5', '-i', hero_img,
    '-filter_complex', filter_complex,
    '-map', '[vfinal]',
    '-r', '30',
    '-pix_fmt', 'yuvj420p',
    '-q:v', '2',
    'public/Frames/ezgif-frame-%03d.jpg'
]

print("Executing ffmpeg...")
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print("FFmpeg error:", res.stderr)
else:
    print("FFmpeg completed successfully.")
    generated = glob.glob('public/Frames/ezgif-frame-*.jpg')
    print(f"Generated {len(generated)} frames.")
