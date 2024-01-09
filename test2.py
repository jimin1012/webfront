import tkinter as tr
import tkinter.messagebox as wmsg
import time
import random
with open('c:/workspace/level1.txt','r', encoding="UTF-8") as f:
    data = f.read()
    level = data.splitlines()
    f.close()

#DAN1=['공책','연필','지우개','필통']
c=0
d=0
a=0
es=0
start=0
end=0
jeongdab=0
nam=10
x=1
def lv(x):
    global level
    if x==1:
        with open('c:/workspace/level1.txt','r' , encoding="UTF-8") as f:
            data1 = f.read()
            level = data1.splitlines()
            f.close()
    elif x==2:
        with open('c:/workspace/level2.txt','r' , encoding="UTF-8") as p:
            data2 = p.read()
            level = data2.splitlines()
            f.close()
    elif x==3:
        with open('c:/workspace/level3.txt','r' , encoding="UTF-8") as s:
            data3 = s.read()
            level = data3.splitlines()
            f.close()

def munjae(event):
    global c,d,a,es,start,end,jeongdab,nam,x
    label1.config(text="레벨:%s"%x)
    a=label2.cget("text")
    d=input1.get()
    
    if a==d: 
        end = time.time()
        es+=(end-start)
        text.insert(tr.END,"통과!\n")
        jeongdab=jeongdab+1
        nam=nam-1
        label3.config(text="맞은개수:%s, 남은개수:%s"%(jeongdab, nam))
        #print("맞은개수:",jeongdab,"남은개수:",nam)
        c=c+1
        label2.config(text=random.choice(level))
        start = time.time()
        input1.delete(0,5)
        
    else:
        text.insert(tr.END,"오타!\n")

    if c==10:
        msgbox=wmsg.askquestion("팝업","모두 맞히셨습니다.\n다음 레벨로?")
        label4.config(text="타자시간:%s초"%round(es))
        jeongdab=0
        nam=10
        c=0
        es=0
        start=0
        end=0
        if msgbox !='yes':
            root.destroy()
        else:
            x+=1
            label1.config(text="레벨:%s"%x)
            input1.delete(0,5)
            text.delete(1.0,tr.END)
            start = time.time()
            lv(x)
            label2.config(text=random.choice(level))
            if x == 4:
                wmsg.showinfo("클리어", "수고하셨습니다.")
                print("게임이 종료되었습니다.")
                root.destroy()
            
    


root=tr.Tk()
root.title("타자게임")
root.geometry("600x400")
#라벨생성
label1=tr.Label()#레벨
label1.place(x=5,y=40)
label2=tr.Label()#문제
label2.place(x=120,y=20)
label3=tr.Label()#맞은개수
label3.place(x=5,y=60)
label4=tr.Label()
label4.place(x=5,y=80)#타자시간

#엔트리 생성
input1=tr.Entry(width="20")
input1.place(x=60,y=40)
#텍스트 생성
text=tr.Text()
text.place(x=300,y=0,width="300")
#text.insert(1.0,a)
#text.insert(2.0,"\n")

label2.config(text=random.choice(level))
start = time.time()
d=input1.bind("<Return>",munjae)
root.mainloop()
