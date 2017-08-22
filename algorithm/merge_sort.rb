arr = [2,8,1,3]

def merge(arr, low, mid, high)
 sub1 = arr[low..mid]
 sub2 = arr[mid+1..high]
 i,j,k = 0,0,0
 
  if( sub1[i] <= sub2[j])
    arr[k] = sub1[i]
  else
    arr[k] = sub2[j] 
  end
  k = k+ 1

end

def mergesort(arr, low, high, who)
  mid = ((low + high)/2).to_i
  if (low < high)
   
    mergesort(arr, low, mid, "first")
    mergesort(arr, mid+1, high, "second")
   
    merge(arr, low, mid, high)
     p "mid #{mid}"
  end
end

mergesort(arr, 0, arr.length-1, "main")
p arr
