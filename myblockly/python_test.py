from tkinter import filedialog
from tkinter import *
import os


if __name__ == "__main__":
    ros_dir = filedialog.askdirectory(initialdir="~", title="ros_ws경로를 선택해주세요")
    middle_dir = ()
    while True:
        middle_dir = filedialog.askopenfilenames(
            initialdir="~/Downloads", title="middle.py파일을 선택 해 주세요", filetypes=(("*.py", "*py"), ("*.xls", "*xls")))
        if middle_dir[0].split('/')[-1][0:11] == "middle_code":
            break
    middle_dir = middle_dir[0]
    # ros_dir = '/home/minseoklee/robot_ws'
    # middle_dir = '/home/minseoklee/Downloads/middle_code (1).py'
    print(ros_dir)
    print(middle_dir)
    ros_dir += "/src/robot_programing/block_coding_node/block_coding_node/main_copy.py"
    resulte_py = ""
    middle_py = None
    f = open(middle_dir, 'r')
    middle_py = f.readlines()
    f.close()
    print(middle_py)
    f = open(ros_dir, 'r')
    read_lines = f.readlines()
    f.close()
    middle_code=''
    while True:
        line=read_lines[0]
        resulte_py += line
        read_lines.pop(0)
        if line == '        # code_start\n':
            break
    for line in middle_py:
        middle_code += '        '+line
    resulte_py+=middle_code
    while True:
        line=read_lines[0]
        read_lines.pop(0)
        if line == '        # code_end\n':
            resulte_py += line
            break
    while len(read_lines):
        line=read_lines[0]
        read_lines.pop(0)
        resulte_py += line
    print(resulte_py)
    f = open(ros_dir[:-8]+'.py', 'w')
    f.write(resulte_py)
    f.close()


    # lidar 사용시에만 lidar 실행
    lidar_use='self.lidar' in middle_code
    launch_ros2='ros2 launch block_coding_node block_coding.launch.py'+' lidar_use:='+str(lidar_use)
    if lidar_use:
        lidar_mode=input('input lidar mode (raw,zero,trunc)\n')
        launch_ros2+=' lidar_mode:='+lidar_mode

    print(launch_ros2)

    os.system(launch_ros2)
