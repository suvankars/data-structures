def ks(w, n, C)
  return 0 if (n == 0 or C ==0)

  if (w[n] > C)
    return ks(w, n-1, C)
  end 
    dont_take = ks(w, n-1, C)
    take = v[n]+ks(w, n-1, C-w[n])

    return max(dont_take, take)
end