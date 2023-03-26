arr = input().split(" ")

def minFromFour(a : int,b : int,c : int,d : int) -> int:
    return min(a,b,c,d) 

print(minFromFour(int(arr[0]),int(arr[1]),int(arr[2]),int(arr[3])))