#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include "common.h"
int
main(int argc, char *argv[])
{
    int *p = malloc(sizeof(int));
    assert(p != NULL);
    printf("(%d) memorygetpid(), (unsigned) p); address of p: %p\n",
    
    *p = 0;
    while(1){
        Spin(1);
        *p = *p +1;
        printf("(%d) p: %d\n",getpid(), *p);
    }
    return 0;
}