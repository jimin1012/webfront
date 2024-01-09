import turtle as tr
import random
#필요한 변수 선언
count=0 #점수 
p=0
speed=5

#방향에 대한 변수
dir_right=0
dir_left=180
dir_up=90
dir_down=270

tr.bgcolor("yellow")#배경
tv=tr.Turtle()#악당거북이
tv.shape("turtle")
tv.color("red")
tv.up()
tv.speed(0)
tv.goto(0,200)

tr.shape("turtle")#플레이어 거북이
tr.color("black")
tr.up()
tr.write("스페이스바를 누르면 시작",False,"center",font=("",20))

tg=tr.Turtle()#먹이
tg.shape("circle")
tg.color("green")
tg.up()
tv.speed(0)
tg.goto(0,-200)

sc=tr.Turtle()#점수 띄울 때 필요한 거북이1
sc.color("red")
sc.up()
sc.ht()#히든으로 숨긴거임
sc.goto(0,200)


sc2=tr.Turtle()#점수 띄울 때 필요한 거북이2
sc2.color("red")
sc2.up()
sc2.ht()#히든으로 숨긴거임
sc2.goto(220,200)

def right():
    global dir_right
    tr.setheading(dir_right)
def left():
    global dir_left
    tr.setheading(dir_left)
def up():
    global dir_up
    tr.setheading(dir_up)
def down():
    global dir_down
    tr.setheading(dir_down)
    
# tv:악당 tg:먹이  
def space():
    global p
    if p==0:
        p=1
        tr.home()
        
        tv.goto(0,200)
        tg.goto(0,-200)
        
        sc.clear()
        sc2.clear()
        tr.clear()
        count=0
        play()
def area():#거북이 못나가게 하는 함수
    global dir_right,dir_left,dir_up,dir_down
    if tr.xcor()>350:#오른쪽
        
        tr.setheading(dir_left)#left
        
    if tr.ycor()>310:#위에
        tr.setheading(dir_down)#down
        
        
    if tr.xcor()<-350:#왼쪽
        tr.setheading(dir_right)#right
        
    if tr.ycor()<-310:#아래
        tr.setheading(dir_up)#up
        
def play():
    global p,count,speed
    
                    
    tr.forward(13)#플레이어 앞으로
    he=tv.towards(tr.pos())#현재 플레이어의 위치로 악당이 쫓아감
    tv.setheading(he)#악당 머리방향

    area()#거북이 못나가게 하는 함수 실행
   
    if tr.distance(tg)<15:#먹이 위치 옮기는 거
        x=random.randint(-200,200)
        y=random.randint(-200,200)
        tg.goto(x,y)
        count=count+1
        tr.write(count,move=False,font=(5))
        speed=speed+1# 먹이를 먹을 수록 악당 거북이 빨라짐
        
    if speed >12:# 최대 속도 12로 설정
        speed=12
        
    tv.forward(speed)#악당 speed만큼 이동
    
    
    if tr.distance(tv)<=5:#플레이어 거북이가 잡혔다면
        p=0
        sc.write("game over ! 총점수:",move=False,align="center",font=("",30))
        sc2.write(count,move=False,align="left",font=("",30))
        count=0
    if p==1:#플레이어가 악당한테 안잡혔다면 게속 play실행
        
        tr.ontimer(play,70)    
        
        
       
tr.onkeypress(right,"Right")#방향키→
tr.onkeypress(left,"Left")#방향키←
tr.onkeypress(up,"Up")#방향키↑
tr.onkeypress(down,"Down")#방향키↓
tr.onkeypress(space,"space")
tr.title("거북이게임")
tr.listen()

tr.mainloop()
