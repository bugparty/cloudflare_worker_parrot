import time
parrot_file = open('parrot.txt')
frames = []
def read_frame():
    frame = []
    for i in range(18):
        line = parrot_file.readline()
        frame.append(line)
    return ''.join(frame)

while True:
    frame = read_frame()
    if not frame:
        break
    frames.append(frame)
    print(frame, end='')
    time.sleep(0.1)
    
parrot_file.close()
print('Number of frames:', len(frames))
fout = open('parrot_frames.js', 'w')
fout.write('var parrot_frames = [\n')
for frame in frames:
    fout.write(f"`{frame}`,\n")
fout.write('];\n')
fout.write('''export { parrot_frames };
export default parrot_frames;''')
fout.close()
print('Frames written to parrot_frames.js')
