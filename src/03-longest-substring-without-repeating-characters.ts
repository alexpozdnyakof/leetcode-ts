export function lengthOfLongestSubstring(s: string): number {
    let i = 0;
    let result = 0; 
    let substr = new String();
    
    while(i < s.length) {
        if(substr.includes(s[i])) {
            if(substr.length > result) result = substr.length;
            substr = substr.substring(substr.indexOf(s[i]) + 1)
        } 
        
        substr = substr.concat(s[i]);
        i++; 
    }

    return substr.length > result ? substr.length : result;
}

