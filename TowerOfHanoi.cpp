#include<bits/stdc++.h>
using namespace std;
static int x=0;
 void tower(int n, char a, char b, char c)
 {
    if (n<=0)
    return;
    else if(n==1)
    {
        cout<<"Disc from "<<a<<" to "<<c;
        cout<<endl; 
        x++;
        return;
    }
    else{
        tower(n-1,a,c,b);
        cout<<"Disc from "<<a<<" to "<<c<<endl;
        x++;
        tower(n-1,b,a,c);
    }
 }
 int main()
 {
    tower(4,'A','B','C');
    cout<<"Number of steps: "<<x;
 }
