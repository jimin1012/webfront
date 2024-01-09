import tkinter as tr
import tkinter.messagebox as wmsg
import random
#게임만들기

a=[random.randint(0,9) for r in range(4)]

def init():
    global a
    a=[random.randint(0,9) for r in range(4)]
    
def click1():
    strike=0
    ball=0
    b=input1.get()
    
    if b.isdecimal():
        
        if len(b)==4:            
            c=list(map(int, list(str(b))))
                       
            for s in range(0,4):
                if (a[s] ==  c[s]):
                        strike+=1
                for o in range(0,4):             
                    if(a[s]==c[o] and a[s]!=c[s] and a[o]!=c[o]):
                        ball+=1
                        break
            text.insert(tr.END,"%s %d스트라이크 %d볼\n"%(c,strike,ball,))
            input1.delete(0,4)
            if strike==4:
                msgbox=wmsg.askquestion("팝업","맞았습니다\n원 모어 타임?")
                if msgbox !='yes':
                    root.destroy()
                else:
                    text.delete(1.0,tr.END)
                    init()
                    #text.insert(1.0,a)#답을 보면서 하고 싶다면 주석을 푸세요
                    #text.insert(2.0,"\n")#답을 보면서 하고 싶다면 주석을 푸세요
        else:
            wmsg.showinfo("팝업","길이가  맞지 않습니다")
                
    else:
        wmsg.showinfo("팝업","숫자가아닙니다")

        
root=tr.Tk()
root.title("야구게임")
root.geometry("600x400")
#라벨생성
lable=tr.Label(text="숫자4개입력하시오.",font=("돋움",12))
lable.place(x=20,y=20)
#엔트리 생성
input1=tr.Entry(width="4")
input1.place(x=20,y=40)
#버튼 생성
Button=tr.Button(text="버튼",width="10",command=click1)
Button.place(x=60,y=40)
#텍스트 생성
text=tr.Text()
text.place(x=300,y=0,width="300")
a=[random.randint(0,9) for r in range(4)]
#text.insert(1.0,a)#답을 보면서 하고 싶다면 주석을 푸세요
#text.insert(2.0,"\n")#답을 보면서 하고 싶다면 주석을 푸세요



root.mainloop()
